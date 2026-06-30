const { DateTime } = require('luxon');
const StaffAttendance = require('../models/StaffAttendance');
const LeaveRequest = require('../models/LeaveRequest');
const StaffExtras = require('../models/StaffExtras');
const StaffSalaryPayment = require('../models/StaffSalaryPayment');

const getCycleDates = (joiningDate, month, year) => {
  const day = joiningDate ? new Date(joiningDate).getDate() : 1;
  const startDate = new Date(year, month, day);
  const endDate = new Date(year, month + 1, day - 1);
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

  const leaves = await LeaveRequest.find({
    staff: staff._id,
    status: 'Approved',
    $or: [
      { startDate: { $lte: endStr }, endDate: { $gte: startStr } }
    ]
  });

  let calculatedPaidLeaves = 0;
  leaves.forEach(l => {
     if (['Sick Leave', 'Paid Leave', 'Full Day'].includes(l.type)) {
         let current = new Date(l.startDate);
         let end = new Date(l.endDate);
         while (current <= end) {
             if (current >= startDate && current <= endDate) calculatedPaidLeaves += 1;
             current.setDate(current.getDate() + 1);
         }
     } else if (l.type === 'Half Day') {
         let current = new Date(l.startDate);
         let end = new Date(l.endDate);
         while (current <= end) {
             if (current >= startDate && current <= endDate) calculatedPaidLeaves += 0.5;
             current.setDate(current.getDate() + 1);
         }
     }
  });

  let paidLeaves = calculatedPaidLeaves;
  let paidSundays = 0;
  let unpaidSundays = 0;
  let sundaysWorked = 0;

  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    if (currentDate.getDay() === 0) {
      const dateStr = currentDate.toISOString().split('T')[0];
      const worked = attendance.find(a => a.date === dateStr);
      if (worked) {
        sundaysWorked += worked.status === 'half-day' ? 0.5 : 1;
      }

      if (staff.staffType === 'Regular' || staff.staffType === 'Hotel') {
         let monToSatPresent = 0;
         let monToSatLeaves = 0;
         let checkDate = new Date(currentDate);
         checkDate.setDate(checkDate.getDate() - 6);
         
         while (checkDate < currentDate) {
             const cStr = checkDate.toISOString().split('T')[0];
             const a = attendance.find(x => x.date === cStr);
             if (a) monToSatPresent++;
             
             let onLeave = false;
             leaves.forEach(l => {
                 if (['Sick Leave', 'Paid Leave', 'Full Day', 'Half Day'].includes(l.type)) {
                     if (cStr >= l.startDate && cStr <= l.endDate) onLeave = true;
                 }
             });
             if (onLeave) monToSatLeaves++;
             
             checkDate.setDate(checkDate.getDate() + 1);
         }
         
         if (monToSatPresent + monToSatLeaves < 6) {
             unpaidSundays++;
         } else {
             paidSundays++;
         }
      } else {
          unpaidSundays++;
      }
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const basicSalary = staff.salary || 0;
  let earnedSalary = 0;
  let unpaidAbsents = 0;
  const totalWorked = presentDays + (halfDays * 0.5);

  if (staff.staffType === 'Daily') {
      paidLeaves = 0;
      paidSundays = 0;
      earnedSalary = totalWorked * basicSalary;
  } else {
      const earnedDays = totalWorked + paidLeaves + paidSundays;
      earnedSalary = (earnedDays / totalDaysInCycle) * basicSalary;
      unpaidAbsents = Math.max(0, totalDaysInCycle - earnedDays);
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
      status: 'pending'
    },
    { new: true, upsert: true }
  );
  return payment;
};
