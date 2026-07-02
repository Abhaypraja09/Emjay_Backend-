const { DateTime } = require('luxon');
const StaffAttendance = require('../models/StaffAttendance');
const LeaveRequest = require('../models/LeaveRequest');
const StaffExtras = require('../models/StaffExtras');
const StaffSalaryPayment = require('../models/StaffSalaryPayment');

const getCycleDates = (joiningDate, month, year) => {
  const startDate = new Date(Date.UTC(year, month, 1));
  const endDate = new Date(Date.UTC(year, month + 1, 0)); // 0th day of next month is last day of current month
  return { startDate, endDate };
};

exports.processSingleStaffSalary = async (staff, month, year, companyId) => {
  const { startDate, endDate } = getCycleDates(staff.joiningDate, month, year);
  const totalDaysInCycle = Math.ceil(Math.abs(endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
  const startStr = startDate.toISOString().split('T')[0];
  const endStr = endDate.toISOString().split('T')[0];

  const attendance = await StaffAttendance.find({
    staff: staff._id,
    date: { $gte: startStr, $lte: endStr },
    status: { $in: ['present', 'half-day'] }
  });
  
  let presentDays = 0;
  let halfDays = 0;
  attendance.forEach(a => {
    if (a.status === 'present') presentDays += 1;
    if (a.status === 'half-day') halfDays += 1;
  });

  const basicSalary = staff.salary || 0;
  let earnedSalary = 0;
  let unpaidAbsents = 0;
  let paidLeaves = 0;
  let paidSundays = 0;
  let unpaidSundays = 0;
  let sundaysWorked = 0;
  const totalWorked = presentDays + (halfDays * 0.5);

  let carryForwardStats = {
    totalAccrued: 0,
    totalUsed: 0,
    historicalBalance: 0,
    availableThisMonth: 0,
    utilizedThisMonth: 0
  };

  if (staff.staffType === 'Fix' || staff.staffType === 'Fixed') {
      earnedSalary = basicSalary;
      // Fixed gets full pay, no deductions, no paid Sunday calculations needed
  } else if (staff.staffType === 'Daily' || staff.staffType === 'Daily Wages') {
      const dailyRate = basicSalary < 5000 ? basicSalary : basicSalary / totalDaysInCycle;
      earnedSalary = totalWorked * dailyRate;
      // Daily gets exact days worked * daily rate
  } else {
      // REGULAR STAFF (WITH LEAVES)
      const monthlyQuota = staff.monthlyLeaveQuota !== undefined ? staff.monthlyLeaveQuota : 4;
      
      const joinDate = staff.joiningDate ? new Date(staff.joiningDate) : new Date(startDate);
      // Ensure joinDate is in UTC matching startDate to avoid day offsets
      const utcJoinDate = new Date(Date.UTC(joinDate.getFullYear(), joinDate.getMonth(), joinDate.getDate()));

      // 1. Calculate Carry Forward Math
      let monthsPassed = (startDate.getUTCFullYear() - utcJoinDate.getUTCFullYear()) * 12 + (startDate.getUTCMonth() - utcJoinDate.getUTCMonth());
      if (monthsPassed < 0) monthsPassed = 0;

      const historicalAccrued = monthsPassed * monthlyQuota;
      
      let totalPastAbsents = 0;
      if (monthsPassed > 0) {
          const pastAttendance = await StaffAttendance.find({
              staff: staff._id,
              date: { $gte: utcJoinDate.toISOString().split('T')[0], $lt: startStr },
              status: { $in: ['present', 'half-day'] }
          });
          
          let pastPresents = 0;
          pastAttendance.forEach(a => pastPresents += (a.status === 'half-day' ? 0.5 : 1));
          
          let pastWorkingDays = 0;
          let checkD = new Date(utcJoinDate);
          while (checkD < startDate) {
              if (checkD.getUTCDay() !== 0) pastWorkingDays++; // exclude Sundays
              checkD.setUTCDate(checkD.getUTCDate() + 1);
          }
          
          totalPastAbsents = Math.max(0, pastWorkingDays - pastPresents);
      }
      
      const historicalBalance = Math.max(0, historicalAccrued - totalPastAbsents);
      const availableLeaves = historicalBalance + monthlyQuota;

      carryForwardStats.totalAccrued = historicalAccrued;
      carryForwardStats.totalUsed = totalPastAbsents;
      carryForwardStats.historicalBalance = historicalBalance;
      carryForwardStats.availableThisMonth = availableLeaves;

      // 2. Current Month Logic
      const leaves = await LeaveRequest.find({
        staff: staff._id,
        status: 'Approved',
        $or: [
          { startDate: { $lte: endStr }, endDate: { $gte: startStr } }
        ]
      });

      let currentWorkingDays = 0;
      let currentDate = new Date(startDate);
      let weeklyUnapprovedAbsents = 0;
      
      while (currentDate <= endDate) {
          const dateStr = currentDate.toISOString().split('T')[0];
          const dayOfWeek = currentDate.getUTCDay();
          
          const att = attendance.find(a => a.date === dateStr);
          const isPresent = att ? (att.status === 'half-day' ? 0.5 : 1) : 0;
          
          // Do not penalize future days if generating mid-month
          const now = new Date();
          const todayStr = now.toISOString().split('T')[0];
          const isFuture = dateStr > todayStr;
          
          if (dayOfWeek !== 0) {
              currentWorkingDays++;
              if (isPresent < 1 && !isFuture) {
                  const absentFraction = 1 - isPresent;
                  
                  // Check if they had an explicit Approved LeaveRequest
                  let hasApprovedLeave = false;
                  leaves.forEach(l => {
                      if (dateStr >= l.startDate && dateStr <= l.endDate) hasApprovedLeave = true;
                  });
                  
                  // Consume quota for any absence
                  carryForwardStats.utilizedThisMonth += absentFraction;
                  
                  // If unapproved, penalize Sunday
                  if (!hasApprovedLeave) {
                      weeklyUnapprovedAbsents += absentFraction;
                  }
              }
          } else {
              // Sunday
              const sundayAtt = attendance.find(a => a.date === dateStr);
              if (sundayAtt) {
                  sundaysWorked += sundayAtt.status === 'half-day' ? 0.5 : 1;
              }

              if (!isFuture) {
                  if (weeklyUnapprovedAbsents > 0) {
                      unpaidSundays++;
                  } else {
                      paidSundays++;
                  }
              }
              weeklyUnapprovedAbsents = 0; // reset for next week
          }
          
          currentDate.setUTCDate(currentDate.getUTCDate() + 1);
      }

      // 3. Final Paid Leaves calculation
      if (carryForwardStats.utilizedThisMonth <= availableLeaves) {
          paidLeaves = carryForwardStats.utilizedThisMonth;
      } else {
          paidLeaves = availableLeaves;
          unpaidAbsents = carryForwardStats.utilizedThisMonth - availableLeaves;
      }

      const earnedDays = totalWorked + paidLeaves + paidSundays;
      earnedSalary = (earnedDays / totalDaysInCycle) * basicSalary;
  }

  let overtimeHours = 0;
  let overtimeAmount = 0;
  if (staff.overtime && staff.overtime.enabled) {
      attendance.forEach(a => {
          if (a.punchIn && a.punchOut) {
              const start = new Date(a.punchIn.time);
              const end = new Date(a.punchOut.time);
              const diffHours = Math.abs(end - start) / (1000 * 60 * 60);
              if (diffHours > staff.overtime.thresholdHours) {
                  overtimeHours += (diffHours - staff.overtime.thresholdHours);
              }
          }
      });
      overtimeAmount = overtimeHours * staff.overtime.ratePerHour;
      earnedSalary += overtimeAmount;
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

  const payment = await StaffSalaryPayment.findOneAndUpdate(
    { staff: staff._id, month, year, companyId },
    {
      basicSalary,
      presentDays: totalWorked,
      paidLeaves,
      unpaidAbsents,
      paidSundays,
      unpaidSundays,
      sundaysWorked,
      overtimeHours,
      overtimeAmount,
      totalDaysInCycle,
      cycleStart: startStr,
      cycleEnd: endStr,
      earnedSalary,
      allowances,
      advances,
      amount: netPayable > 0 ? netPayable : 0,
      status: 'pending',
      carryForwardStats
    },
    { new: true, upsert: true }
  );
  return payment;
};
