const Staff = require('../models/Staff');
const StaffAttendance = require('../models/StaffAttendance');
const StaffExtras = require('../models/StaffExtras');
const LeaveRequest = require('../models/LeaveRequest');
const StaffSalaryPayment = require('../models/StaffSalaryPayment');

exports.getStaff = async (req, res) => {
  try {
    const staff = await Staff.find().sort({ createdAt: -1 });
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addStaff = async (req, res) => {
  try {
    const staff = new Staff(req.body);
    await staff.save();
    res.status(201).json(staff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!staff) return res.status(404).json({ message: 'Staff not found' });
    res.json(staff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndDelete(req.params.id);
    if (!staff) return res.status(404).json({ message: 'Staff not found' });
    res.json({ message: 'Staff deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();

exports.calculatePayroll = async (req, res) => {
    try {
        const { staffId, month, year, companyId } = req.body;
        
        const staff = await Staff.findById(staffId);
        if (!staff) return res.status(404).json({ message: 'Staff not found' });

        const totalDays = getDaysInMonth(year, month);
        const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
        const endDate = `${year}-${String(month).padStart(2, '0')}-${totalDays}`;

        // 1. Calculate Attendance
        const attendance = await StaffAttendance.find({
            staff: staffId,
            date: { $gte: startDate, $lte: endDate }
        });

        let presentDays = 0;
        let sundaysWorked = 0;
        attendance.forEach(record => {
            if (record.status === 'present') {
                const dateObj = new Date(record.date);
                if (dateObj.getDay() === 0) sundaysWorked++;
                else presentDays++;
            } else if (record.status === 'half-day') {
                presentDays += 0.5;
            }
        });

        // 2. Calculate Leaves
        const leaves = await LeaveRequest.find({
            staff: staffId,
            status: 'Approved',
            startDate: { $gte: startDate },
            endDate: { $lte: endDate }
        });

        let paidLeaves = 0;
        leaves.forEach(leave => {
            if (leave.type === 'Paid Leave' || leave.type === 'Sick') {
                const days = (new Date(leave.endDate) - new Date(leave.startDate)) / (1000 * 60 * 60 * 24) + 1;
                paidLeaves += days;
            }
        });

        // 3. Advances & Allowances
        const extras = await StaffExtras.find({
            staff: staffId,
            status: 'Approved',
            date: { $gte: new Date(startDate), $lte: new Date(endDate) }
        });

        let advances = 0;
        let allowances = 0;
        extras.forEach(extra => {
            if (extra.type === 'Advance' || extra.type === 'Loan') advances += extra.amount;
            else if (extra.type === 'Allowance') allowances += extra.amount;
        });

        // 4. Formula Calculation
        const dailyRate = (staff.staffType === 'Daily' || staff.staffType === 'Daily Wages') && staff.salary < 5000 
            ? staff.salary 
            : staff.salary / totalDays;
        
        let earnedSalary = 0;

        if (staff.staffType === 'Fix') {
            // Fix Salary: Always gets full basic salary
            earnedSalary = staff.salary;
        } 
        else if (staff.staffType === 'Daily' || staff.staffType === 'Daily Wages') {
            // Daily Wages: Only gets paid for present days (No Sundays, No Leaves)
            earnedSalary = presentDays * dailyRate;
        }
        else {
            // Regular Staff: Carry Forward Leave System & Deductions
            const joinDate = new Date(staff.joinDate || Date.now());
            const currentDate = new Date(year, month - 1, totalDays);
            const monthsSinceJoining = (currentDate.getFullYear() - joinDate.getFullYear()) * 12 + currentDate.getMonth() - joinDate.getMonth();
            const totalAccrued = Math.max(0, monthsSinceJoining) * (staff.monthlyLeaveQuota || 4);

            // Get total approved leaves taken in the past (before this month)
            const totalTakenLeavesObj = await LeaveRequest.find({
                staff: staffId,
                status: 'Approved',
                endDate: { $lt: startDate }
            });
            let totalTakenLeaves = 0;
            totalTakenLeavesObj.forEach(l => {
                totalTakenLeaves += (new Date(l.endDate) - new Date(l.startDate)) / (1000*60*60*24) + 1;
            });
            
            let availableLeaveBalance = totalAccrued - totalTakenLeaves;
            if (availableLeaveBalance < 0) availableLeaveBalance = 0;

            // Calculate Absent Days in current month
            const expectedWorkingDays = totalDays - 4; // Assuming 4 Sundays
            const absentDays = Math.max(0, expectedWorkingDays - presentDays);
            
            let unpaidAbsents = 0;
            if (absentDays > availableLeaveBalance) {
                unpaidAbsents = absentDays - availableLeaveBalance;
            }

            // Deduct unpaid absents from monthly salary
            earnedSalary = staff.salary - (unpaidAbsents * dailyRate);
            if (earnedSalary < 0) earnedSalary = 0;
        }

        // Overtime (Simple assumption: Sunday worked = 1.5x daily rate)
        const overtimeAmount = sundaysWorked * (dailyRate * 1.5);
        
        let netPayable = earnedSalary + overtimeAmount + allowances - advances;

        // Carry Forward Logic (If advances > salary)
        let carryForwardAdvance = 0;
        if (netPayable < 0) {
            carryForwardAdvance = Math.abs(netPayable);
            netPayable = 0;
        }

        const salarySlip = {
            staff: staffId, companyId, month, year,
            basicSalary: staff.salary,
            presentDays, paidLeaves, paidSundays, sundaysWorked,
            overtimeAmount, earnedSalary, allowances, advances,
            amount: Math.round(netPayable)
        };

        // Save or update salary record
        const paymentRecord = await StaffSalaryPayment.findOneAndUpdate(
            { staff: staffId, month, year },
            salarySlip,
            { new: true, upsert: true }
        );

        res.json({ success: true, data: paymentRecord, carryForwardAdvance });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Utility for Geofencing
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = (lat2-lat1) * (Math.PI/180);  
  var dLon = (lon2-lon1) * (Math.PI/180); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(lat1*(Math.PI/180)) * Math.cos(lat2*(Math.PI/180)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  return R * c; 
}

const OFFICE_LAT = 28.7041; // Replace with your factory lat
const OFFICE_LNG = 77.1025; // Replace with your factory lng
const MAX_DISTANCE_KM = 0.5; // 500 meters allowed radius

exports.punchIn = async (req, res) => {
    try {
        const { staffId, date, latitude, longitude, evidenceBase64, companyId } = req.body;

        // Geofencing check
        const distance = getDistanceFromLatLonInKm(latitude, longitude, OFFICE_LAT, OFFICE_LNG);
        if (distance > MAX_DISTANCE_KM) {
            return res.status(403).json({ message: 'You are too far from the office to punch in.' });
        }

        const attendance = await StaffAttendance.findOneAndUpdate(
            { staff: staffId, date },
            {
                companyId,
                punchIn: { time: new Date(), location: { lat: latitude, lng: longitude }, evidence: evidenceBase64 },
                status: 'present'
            },
            { new: true, upsert: true }
        );

        res.json({ success: true, data: attendance });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
