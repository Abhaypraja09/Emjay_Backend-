const User = require('../models/User');
const { DateTime } = require('luxon');
const StaffAttendance = require('../models/StaffAttendance');
const LeaveRequest = require('../models/LeaveRequest');
const StaffSalaryPayment = require('../models/StaffSalaryPayment');
const StaffExtras = require('../models/StaffExtras');
const { processSingleStaffSalary } = require('../utils/salaryLogic');

exports.addStaff = async (req, res) => {
  try {
    const { 
      name, mobile, username, password, salary, companyId,
      designation, joiningDate, employmentType, monthlyLeaveQuota, geofence, shift
    } = req.body;
      const staffData = {
        name,
        mobile,
        password,
        salary,
        role: 'Staff',
        companyId: companyId || req.user.companyId,
        designation,
        joiningDate,
        employmentType,
        staffType: req.body.staffType || 'Regular',
        overtime: req.body.overtime || { enabled: false, thresholdHours: 9, ratePerHour: 100 },
        monthlyTarget: req.body.monthlyTarget || 26,
        monthlyLeaveQuota,
        geofence,
        shift
      };
      if (username && username.trim() !== '') staffData.username = username;
      
      const staff = new User(staffData);
    await staff.save();
    res.status(201).json(staff);
  } catch (error) {
    console.error("ADD STAFF ERROR:", error);
    res.status(400).json({ message: error.message });
  }
};

exports.updateStaff = async (req, res) => {
  try {
    const updates = { ...req.body };
    if (!updates.password) {
      delete updates.password;
    } else {
      const bcrypt = require('bcryptjs');
      const salt = await bcrypt.genSalt(10);
      updates.password = await bcrypt.hash(updates.password, salt);
    }

    if (updates.username !== undefined && updates.username.trim() === '') {
      delete updates.username;
      updates.$unset = { username: 1 };
    }
    
    const staff = await User.findOneAndUpdate(
      { _id: req.params.id, companyId: req.user.companyId },
      updates,
      { new: true }
    );
    if (!staff) return res.status(404).json({ message: 'Staff not found' });
    res.json(staff);
  } catch (error) {
    console.error("UPDATE STAFF ERROR:", error);
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
    let filter = { companyId: req.user.companyId };
    
    if (month && month !== 'undefined' && month !== 'NaN' && year && year !== 'undefined') {
      const regex = new RegExp(`^${year}-${String(month).padStart(2, '0')}`);
      filter.date = { $regex: regex };
    }

    const attendance = await StaffAttendance.find(filter).populate('staff', 'name username');
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

exports.blockStaff = async (req, res) => {
  try {
    const staff = await User.findOne({ _id: req.params.id, companyId: req.user.companyId });
    if (!staff) return res.status(404).json({ message: 'Staff not found' });
    staff.status = staff.status === 'blocked' ? 'active' : 'blocked';
    await staff.save();
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.processSalary = async (req, res) => {
  try {
    const { staffId, month, year } = req.body;
    const staff = await User.findOne({ _id: staffId, role: 'Staff', companyId: req.user.companyId });
    if (!staff) return res.status(404).json({ message: 'Staff not found' });

    const payment = await processSingleStaffSalary(staff, month, year, req.user.companyId);
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
    
    // 60-day restriction
    const requestDate = DateTime.fromISO(date, { zone: 'Asia/Kolkata' });
    const diffDays = DateTime.now().setZone('Asia/Kolkata').diff(requestDate, 'days').days;
    if (diffDays > 60) {
      return res.status(400).json({ message: 'Cannot add or modify attendance older than 60 days.' });
    }

    let attendance = await StaffAttendance.findOne({ staff: staffId, date, companyId: req.user.companyId });
    const inTime = DateTime.fromISO(`${date}T${timeIn}:00`, { zone: 'Asia/Kolkata' }).toJSDate();
    const outTime = timeOut ? DateTime.fromISO(`${date}T${timeOut}:00`, { zone: 'Asia/Kolkata' }).toJSDate() : null;

    if (attendance) {
      if (!attendance.punchIn) attendance.punchIn = { location: { lat: 0, lng: 0 } };
      // Keep existing evidence if present, just update time
      attendance.punchIn.time = inTime;
      
      if (outTime) {
        if (!attendance.punchOut) attendance.punchOut = { location: { lat: 0, lng: 0 } };
        attendance.punchOut.time = outTime;
      }
      attendance.status = status || 'present';
      await attendance.save();
    } else {
      attendance = await StaffAttendance.create({
        staff: staffId,
        date,
        companyId: req.user.companyId,
        punchIn: { time: inTime, location: { lat: 0, lng: 0 } },
        punchOut: outTime ? { time: outTime, location: { lat: 0, lng: 0 } } : null,
        status: status || 'present'
      });
    }

    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAdvances = async (req, res) => {
  try {
    const { month, year } = req.query;
    const query = { companyId: req.user.companyId, type: 'Advance' };
    if (month !== undefined && month !== 'undefined' && year !== undefined && year !== 'undefined') {
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
    const { staffId, amount, description, month, year, date, givenBy } = req.body;
    const advanceDate = date ? new Date(date) : new Date();
    const advance = new StaffExtras({
      staff: staffId,
      companyId: req.user.companyId,
      type: 'Advance',
      amount,
      month,
      year,
      date: advanceDate,
      givenBy: givenBy || 'Office',
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
    const query = { companyId: req.user.companyId };
    if (month !== undefined && month !== 'undefined' && year !== undefined && year !== 'undefined') {
      query.month = parseInt(month);
      query.year = parseInt(year);
    }

    const payments = await StaffSalaryPayment.find(query).populate('staff', 'name username');
    
    let totalBaseSalary = 0;
    let salaryPaid = 0;
    let pendingSalary = 0;
    let totalAdvances = 0;
    
    payments.forEach(p => {
      totalBaseSalary += (p.basicSalary || 0);
      totalAdvances += (p.advances || 0);
      if (p.status === 'paid') salaryPaid += (p.amount || 0);
      else pendingSalary += (p.amount || 0);
    });
    
    res.json({
      payments,
      stats: { totalBaseSalary, salaryPaid, pendingSalary, totalAdvances }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteAdvance = async (req, res) => {
  try {
    const advance = await StaffExtras.findOneAndDelete({ _id: req.params.id, companyId: req.user.companyId, type: 'Advance' });
    if (!advance) return res.status(404).json({ message: 'Advance record not found' });
    res.json({ message: 'Advance deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateAdvance = async (req, res) => {
  try {
    const { amount, date, description, givenBy } = req.body;
    const updates = { amount, date, description, givenBy };
    const advance = await StaffExtras.findOneAndUpdate(
      { _id: req.params.id, companyId: req.user.companyId, type: 'Advance' },
      updates,
      { new: true }
    );
    if (!advance) return res.status(404).json({ message: 'Advance record not found' });
    res.json(advance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.markAsDue = async (req, res) => {
  try {
    const payment = await StaffSalaryPayment.findOneAndDelete({ _id: req.params.id, companyId: req.user.companyId });
    if (!payment) return res.status(404).json({ message: 'Payment record not found' });
    res.json({ message: 'Payment marked as due (record deleted)' });
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
    
    for (const staff of staffList) {
      await processSingleStaffSalary(staff, month, year, req.user.companyId);
    }
    
    res.json({ message: 'Bulk processing completed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.settlePayment = async (req, res) => {
  try {
    const { staffId, month, year, bonus = 0, deduction = 0 } = req.body;
    const payment = await StaffSalaryPayment.findOne({ staff: staffId, month, year, companyId: req.user.companyId });
    if (!payment) return res.status(404).json({ message: 'Salary not processed yet for this month.' });

    const finalPaidAmount = payment.amount + Number(bonus) - Number(deduction);
    
    payment.bonus = Number(bonus);
    payment.deduction = Number(deduction);
    payment.finalPaidAmount = finalPaidAmount > 0 ? finalPaidAmount : 0;
    payment.status = 'paid';
    payment.paymentDate = Date.now();
    
    await payment.save();
    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.markOutAttendance = async (req, res) => {
  try {
    const attendance = await StaffAttendance.findOne({ _id: req.params.id, companyId: req.user.companyId });
    if (!attendance) return res.status(404).json({ message: 'Attendance not found' });
    if (!attendance.punchOut) attendance.punchOut = { location: { lat: 0, lng: 0 } };
    attendance.punchOut.time = new Date();
    await attendance.save();
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
