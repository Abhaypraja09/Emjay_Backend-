const User = require('../models/User');
const { DateTime } = require('luxon');
const StaffAttendance = require('../models/StaffAttendance');
const LeaveRequest = require('../models/LeaveRequest');
const StaffSalaryPayment = require('../models/StaffSalaryPayment');
const StaffExtras = require('../models/StaffExtras');

exports.addStaff = async (req, res) => {
  try {
    const { 
      name, mobile, username, password, salary, companyId,
      designation, joiningDate, employmentType, monthlyLeaveQuota, geofence, shift
    } = req.body;
    const staff = new User({
      name,
      mobile,
      username,
      password,
      salary,
      role: 'Staff',
      companyId: companyId || req.user.companyId,
      designation,
      joiningDate,
      employmentType,
      monthlyLeaveQuota,
      geofence,
      shift
    });
    await staff.save();
    res.status(201).json(staff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getStaff = async (req, res) => {
  try {
    const staff = await User.find({ role: 'Staff', companyId: req.user.companyId }).select('-password').sort({ createdAt: -1 });
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const { month, year } = req.query; // YYYY-MM prefix
    const regex = new RegExp(`^${year}-${month.padStart(2, '0')}`);
    const attendance = await StaffAttendance.find({
      companyId: req.user.companyId,
      date: { $regex: regex }
    }).populate('staff', 'name username');
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getLeaves = async (req, res) => {
  try {
    const leaves = await LeaveRequest.find({ companyId: req.user.companyId })
      .populate('staff', 'name username')
      .sort({ createdAt: -1 });
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateLeave = async (req, res) => {
  try {
    const { status } = req.body;
    const leave = await LeaveRequest.findOneAndUpdate(
      { _id: req.params.id, companyId: req.user.companyId },
      { status },
      { new: true }
    );
    if (!leave) return res.status(404).json({ message: 'Leave request not found' });
    res.json(leave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.processSalary = async (req, res) => {
  try {
    const { staffId, month, year } = req.body;
    const staff = await User.findOne({ _id: staffId, role: 'Staff', companyId: req.user.companyId });
    if (!staff) return res.status(404).json({ message: 'Staff not found' });

    // Calculate Total Days in month
    const totalDays = new Date(year, month + 1, 0).getDate();
    
    // Calculate Present Days
    const monthPrefix = `${year}-${String(month + 1).padStart(2, '0')}`;
    const attendance = await StaffAttendance.find({
      staff: staffId,
      date: { $regex: new RegExp(`^${monthPrefix}`) },
      status: { $in: ['present', 'half-day'] }
    });
    
    let presentDays = 0;
    attendance.forEach(a => {
      presentDays += a.status === 'half-day' ? 0.5 : 1;
    });

    let paidLeaves = 0;
    // We assume any Approved leave within this month counts (simplistic calculation for now)
    const leaves = await LeaveRequest.find({
      staff: staffId,
      status: 'Approved',
      $or: [
        { startDate: { $regex: new RegExp(`^${monthPrefix}`) } },
        { endDate: { $regex: new RegExp(`^${monthPrefix}`) } }
      ]
    });
    
    // Calculate total requested leave days (though the actual calculation will now depend on quota and absent days)
    let requestedPaidLeaves = 0;
    leaves.forEach(l => {
      if (l.type === 'Paid Leave' || l.type === 'Sick Leave') {
        const start = new Date(l.startDate);
        const end = new Date(l.endDate);
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
        requestedPaidLeaves += diffDays;
      }
    });

    const absentDays = Math.max(0, totalDays - presentDays);
    const basicSalary = staff.salary || 0;
    const perDaySalary = basicSalary / totalDays;
    
    let unpaidAbsents = 0;
    let earnedSalary = 0;
    
    if (staff.employmentType === 'DAILY WAGE') {
      paidLeaves = 0;
      unpaidAbsents = 0;
      earnedSalary = presentDays * basicSalary;
    } else {
      if (staff.employmentType === 'REGULAR (WITH LEAVE ALLOWANCE)') {
        const quota = staff.monthlyLeaveQuota || 0;
        paidLeaves = Math.min(absentDays, quota);
        unpaidAbsents = Math.max(0, absentDays - quota);
      } else {
        // FIXED (30 DAYS / NO LEAVE TRACKING)
        paidLeaves = 0;
        unpaidAbsents = absentDays;
      }
      earnedSalary = basicSalary - (unpaidAbsents * perDaySalary);
    }

    // Fetch Extras
    const extras = await StaffExtras.find({
      staff: staffId,
      month,
      year,
      status: 'Approved'
    });
    
    let allowances = 0;
    let advances = 0;
    extras.forEach(e => {
      if (e.type === 'Allowance') allowances += e.amount;
      else advances += e.amount;
    });

    const netPayable = earnedSalary + allowances - advances;

    const payment = await StaffSalaryPayment.findOneAndUpdate(
      { staff: staffId, month, year, companyId: req.user.companyId },
      {
        basicSalary,
        presentDays,
        paidLeaves,
        earnedSalary,
        allowances,
        advances,
        amount: netPayable > 0 ? netPayable : 0,
        status: 'pending'
      },
      { new: true, upsert: true }
    );

    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDashboardStats = async (req, res) => {
  try {
    const totalPersonnel = await User.countDocuments({ role: 'Staff', companyId: req.user.companyId });
    
    const d = new Date();
    const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const todayAttendance = await StaffAttendance.countDocuments({ companyId: req.user.companyId, date: today, status: 'present' });

    res.json({ totalPersonnel, todayAttendance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addManualDuty = async (req, res) => {
  try {
    const { staffId, date, timeIn, timeOut, status } = req.body;
    const attendance = await StaffAttendance.findOneAndUpdate(
      { staff: staffId, date, companyId: req.user.companyId },
      {
        punchIn: { time: DateTime.fromISO(`${date}T${timeIn}:00`, { zone: 'Asia/Kolkata' }).toJSDate(), location: { lat: 0, lng: 0 } },
        punchOut: timeOut ? { time: DateTime.fromISO(`${date}T${timeOut}:00`, { zone: 'Asia/Kolkata' }).toJSDate(), location: { lat: 0, lng: 0 } } : null,
        status: status || 'present'
      },
      { new: true, upsert: true }
    );
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAdvances = async (req, res) => {
  try {
    const { month, year } = req.query;
    const query = { companyId: req.user.companyId, type: 'Advance' };
    if (month && year) {
      query.month = parseInt(month);
      query.year = parseInt(year);
    }
    const advances = await StaffExtras.find(query).populate('staff', 'name username').sort({ createdAt: -1 });
    res.json(advances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.recordAdvance = async (req, res) => {
  try {
    const { staffId, amount, description, month, year } = req.body;
    const advance = new StaffExtras({
      staff: staffId,
      companyId: req.user.companyId,
      type: 'Advance',
      amount,
      month,
      year,
      description,
      status: 'Approved'
    });
    await advance.save();
    res.status(201).json(advance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPayrollData = async (req, res) => {
  try {
    const { month, year } = req.query;
    const payments = await StaffSalaryPayment.find({ 
      companyId: req.user.companyId, 
      month: parseInt(month), 
      year: parseInt(year) 
    }).populate('staff', 'name username');
    
    let totalBaseSalary = 0;
    let salaryPaid = 0;
    let pendingSalary = 0;
    
    payments.forEach(p => {
      totalBaseSalary += (p.basicSalary || 0);
      if (p.status === 'paid') salaryPaid += (p.amount || 0);
      else pendingSalary += (p.amount || 0);
    });
    
    res.json({
      payments,
      stats: { totalBaseSalary, salaryPaid, pendingSalary }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteAttendance = async (req, res) => {
  try {
    const attendance = await StaffAttendance.findOneAndDelete({ _id: req.params.id, companyId: req.user.companyId });
    if (!attendance) return res.status(404).json({ message: 'Attendance record not found' });
    res.json({ message: 'Attendance deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.bulkProcessSalary = async (req, res) => {
  try {
    const { month, year } = req.body;
    const staffList = await User.find({ role: 'Staff', companyId: req.user.companyId });
    
    // Calculate Total Days in month
    const totalDays = new Date(year, month + 1, 0).getDate();
    const monthPrefix = `${year}-${String(month + 1).padStart(2, '0')}`;

    for (const staff of staffList) {
      const attendance = await StaffAttendance.find({
        staff: staff._id,
        date: { $regex: new RegExp(`^${monthPrefix}`) },
        status: { $in: ['present', 'half-day'] }
      });
      
      let presentDays = 0;
      attendance.forEach(a => {
        presentDays += a.status === 'half-day' ? 0.5 : 1;
      });

      const leaves = await LeaveRequest.find({
        staff: staff._id,
        status: 'Approved',
        $or: [
          { startDate: { $regex: new RegExp(`^${monthPrefix}`) } },
          { endDate: { $regex: new RegExp(`^${monthPrefix}`) } }
        ]
      });
      
      let requestedPaidLeaves = 0;
      leaves.forEach(l => {
        if (l.type === 'Paid Leave' || l.type === 'Sick Leave') {
          const start = new Date(l.startDate);
          const end = new Date(l.endDate);
          const diffDays = Math.ceil(Math.abs(end - start) / (1000 * 60 * 60 * 24)) + 1;
          requestedPaidLeaves += diffDays;
        }
      });

      const absentDays = Math.max(0, totalDays - presentDays);
      const basicSalary = staff.salary || 0;
      const perDaySalary = basicSalary / totalDays;
      
      let paidLeaves = 0;
      let unpaidAbsents = 0;
      let earnedSalary = 0;
      
      if (staff.employmentType === 'DAILY WAGE') {
        paidLeaves = 0;
        unpaidAbsents = 0;
        earnedSalary = presentDays * basicSalary;
      } else {
        if (staff.employmentType === 'REGULAR (WITH LEAVE ALLOWANCE)') {
          const quota = staff.monthlyLeaveQuota || 0;
          paidLeaves = Math.min(absentDays, quota);
          unpaidAbsents = Math.max(0, absentDays - quota);
        } else {
          // FIXED (30 DAYS / NO LEAVE TRACKING)
          paidLeaves = 0;
          unpaidAbsents = absentDays;
        }
        earnedSalary = basicSalary - (unpaidAbsents * perDaySalary);
      }

      const extras = await StaffExtras.find({
        staff: staff._id, month, year, status: 'Approved'
      });
      
      let allowances = 0; let advances = 0;
      extras.forEach(e => {
        if (e.type === 'Allowance') allowances += e.amount;
        else advances += e.amount;
      });

      const netPayable = earnedSalary + allowances - advances;

      await StaffSalaryPayment.findOneAndUpdate(
        { staff: staff._id, month, year, companyId: req.user.companyId },
        {
          basicSalary, presentDays, paidLeaves, earnedSalary, allowances, advances,
          amount: netPayable > 0 ? netPayable : 0,
          status: 'pending'
        },
        { new: true, upsert: true }
      );
    }
    
    res.json({ message: 'Bulk processing completed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
