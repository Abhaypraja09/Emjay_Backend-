const StaffAttendance = require('../models/StaffAttendance');
const LeaveRequest = require('../models/LeaveRequest');
const StaffSalaryPayment = require('../models/StaffSalaryPayment');
const User = require('../models/User');
const StaffExtras = require('../models/StaffExtras');
const bcrypt = require('bcryptjs');

const haversineDistance = (coords1, coords2) => {
  const toRad = (x) => (x * Math.PI) / 180;
  const R = 6371e3; // meters
  const dLat = toRad(coords2.lat - coords1.lat);
  const dLng = toRad(coords2.lng - coords1.lng);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(coords1.lat)) * Math.cos(toRad(coords2.lat)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const getTodayString = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

exports.getStatus = async (req, res) => {
  try {
    const today = getTodayString();
    
    // Check if user has registered a face
    const user = await User.findById(req.user._id);
    const hasFaceRegistered = !!(user && user.faceDescriptor && user.faceDescriptor.length > 0);

    const attendance = await StaffAttendance.findOne({ staff: req.user._id, date: today });
    if (!attendance) {
      return res.json({ status: 'Not Punched In', hasFaceRegistered });
    }
    if (attendance.punchOut && attendance.punchOut.time) {
      return res.json({ status: 'Punched Out', punchInTime: attendance.punchIn.time, punchOutTime: attendance.punchOut.time, hasFaceRegistered });
    }
    return res.json({ status: 'Punched In', punchInTime: attendance.punchIn.time, hasFaceRegistered });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.punchIn = async (req, res) => {
  try {
    const today = getTodayString();
    const user = await User.findById(req.user._id);
    const { location, faceDescriptor } = req.body;

    if (!user) {
      console.log("punchIn Error: User not found");
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.status === 'blocked') {
      console.log("punchIn Error: blocked");
      return res.status(403).json({ message: 'Your account has been blocked. Please contact the administrator.' });
    }

    // Verify face
    if (!user.faceDescriptor || user.faceDescriptor.length === 0) {
      console.log("punchIn Error: face not registered");
      return res.status(400).json({ message: 'Face not registered. Please register your face first.' });
    }
    
    // Calculate Euclidean distance
    let distance = 0;
    for (let i = 0; i < faceDescriptor.length; i++) {
      distance += Math.pow(user.faceDescriptor[i] - faceDescriptor[i], 2);
    }
    distance = Math.sqrt(distance);

    if (distance > 0.55) {
      console.log("punchIn Error: Face does not match, distance:", distance);
      return res.status(400).json({ message: 'Authentication Failed: Face does not match!' }); // Changed from 401 to 400 for consistency in mobile app maybe? Wait, frontend had 400 Bad Request error. Let me keep it as it is but log it.
    }

    // Work Geofencing Validation with GPS Accuracy Buffer
    if (user.geofence && user.geofence.lat && user.geofence.lng) {
      if (!location || !location.lat || !location.lng) {
        console.log("punchIn Error: Location required for geofenced staff");
        return res.status(400).json({ message: 'Location required for geofenced staff.' });
      }
      const geoDistance = haversineDistance(user.geofence, location);
      const accuracyBuffer = Math.min(location.accuracy || 0, 500);
      const allowedRadius = user.geofence.radius || 100;
      
      if (geoDistance - accuracyBuffer > allowedRadius) {
        console.log("punchIn Error: out of geofence");
        return res.status(400).json({ message: 'Out of Geofence! You must be at the office to punch in.' });
      }
    }

    const existing = await StaffAttendance.findOne({ staff: req.user._id, date: today });
    if (existing) {
      console.log("punchIn Error: already punched in today");
      return res.status(400).json({ message: 'Already punched in today' });
    }

    const activeLeave = await LeaveRequest.findOne({
      staff: req.user._id,
      status: 'Approved',
      startDate: { $lte: today },
      endDate: { $gte: today }
    });

    if (activeLeave) {
      console.log("punchIn Error: approved leave");
      return res.status(400).json({ message: 'Cannot punch in while on an approved leave.' });
    }

    const attendance = new StaffAttendance({
      staff: req.user._id,
      companyId: req.user.companyId,
      date: today,
      punchIn: {
        time: new Date(),
        location,
        evidence: req.body.evidence
      },
      status: 'present'
    });

    await attendance.save();
    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.punchOut = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { location, faceDescriptor } = req.body;
    const today = getTodayString();
    
    // Verify face
    if (!user.faceDescriptor || user.faceDescriptor.length === 0) {
      return res.status(400).json({ message: 'Face not registered.' });
    }
    let distance = 0;
    for (let i = 0; i < faceDescriptor.length; i++) {
      distance += Math.pow(user.faceDescriptor[i] - faceDescriptor[i], 2);
    }
    distance = Math.sqrt(distance);
    if (distance > 0.55) {
      return res.status(401).json({ message: 'Authentication Failed: Face does not match!' });
    }

    // Work Geofencing Validation with GPS Accuracy Buffer
    if (user.geofence && user.geofence.lat && user.geofence.lng) {
      if (!location || !location.lat || !location.lng) {
        return res.status(400).json({ message: 'Location required for geofenced staff.' });
      }
      const geoDistance = haversineDistance(user.geofence, location);
      const accuracyBuffer = Math.min(location.accuracy || 0, 500);
      const allowedRadius = user.geofence.radius || 100;
      
      if (geoDistance - accuracyBuffer > allowedRadius) {
        return res.status(400).json({ message: 'Out of Geofence! You must be at the office to punch out.' });
      }
    }

    const attendance = await StaffAttendance.findOne({ staff: req.user._id, date: today });
    if (!attendance) {
      return res.status(400).json({ message: 'No punch-in record found for today' });
    }
    if (attendance.punchOut && attendance.punchOut.time) {
      return res.status(400).json({ message: 'Already punched out today' });
    }

    attendance.punchOut = {
      time: new Date(),
      location,
      evidence: req.body.evidence
    };
    await attendance.save();
    
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const { month, year } = req.query; // optional filtering
    let filter = { staff: req.user._id };
    
    // Enforce 60-day limit
    const sixtyDaysAgo = new Date();
    sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);
    const sixtyDaysAgoStr = sixtyDaysAgo.toISOString().split('T')[0];

    if (month && year) {
      const regex = new RegExp(`^${year}-${String(month).padStart(2, '0')}`);
      filter.date = { $regex: regex, $gte: sixtyDaysAgoStr };
    } else {
      filter.date = { $gte: sixtyDaysAgoStr };
    }
    const history = await StaffAttendance.find(filter).sort({ date: -1 });
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.applyLeave = async (req, res) => {
  try {
    const { startDate, endDate, reason, type } = req.body;
    const leave = new LeaveRequest({
      staff: req.user._id,
      companyId: req.user.companyId,
      startDate,
      endDate,
      reason,
      type
    });
    await leave.save();
    res.status(201).json(leave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getLeaves = async (req, res) => {
  try {
    const leaves = await LeaveRequest.find({ staff: req.user._id }).sort({ createdAt: -1 });
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSalaryCycles = async (req, res) => {
  try {
    const salaries = await StaffSalaryPayment.find({ staff: req.user._id })
      .sort({ year: -1, month: -1 })
      .limit(12);
    res.json(salaries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.registerFace = async (req, res) => {
  try {
    const { faceDescriptor } = req.body;
    if (!faceDescriptor || !Array.isArray(faceDescriptor)) {
      return res.status(400).json({ message: 'Invalid face data provided' });
    }
    
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    user.faceDescriptor = faceDescriptor;
    await user.save();
    
    res.json({ message: 'Face registered successfully' });
  } catch (error) {
    console.error('Register face error:', error);
    res.status(500).json({ message: error.message });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: 'Current password and new password are required' });
    }

    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect current password' });
    }

    user.password = newPassword;
    await user.save();

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCurrentCycleReport = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Calculate current cycle dates based on joining date
    const today = new Date();
    const joinDate = user.joiningDate || today;
    const joinDay = new Date(joinDate).getDate();

    let start = new Date(today.getFullYear(), today.getMonth(), joinDay);
    let end = new Date(today.getFullYear(), today.getMonth() + 1, joinDay - 1);

    if (today < start) {
      start = new Date(today.getFullYear(), today.getMonth() - 1, joinDay);
      end = new Date(today.getFullYear(), today.getMonth(), joinDay - 1);
    }

    const startStr = start.toISOString().split('T')[0];
    const endStr = end.toISOString().split('T')[0];
    const totalDaysInCycle = Math.ceil(Math.abs(end - start) / (1000 * 60 * 60 * 24)) + 1;

    // Fetch attendance records in this cycle
    const attendance = await StaffAttendance.find({
      staff: user._id,
      date: { $gte: startStr, $lte: endStr }
    });

    let presentDays = 0;
    let halfDays = 0;
    let absentDays = 0;

    attendance.forEach(a => {
      if (a.status === 'present') presentDays++;
      else if (a.status === 'half-day') halfDays++;
      else if (a.status === 'absent') absentDays++;
    });

    const totalWorked = presentDays + (halfDays * 0.5);

    // Fetch approved leaves in this cycle
    const leaves = await LeaveRequest.find({
      staff: user._id,
      status: 'Approved',
      $or: [
        { startDate: { $lte: endStr }, endDate: { $gte: startStr } }
      ]
    });

    let paidLeaves = 0;
    leaves.forEach(l => {
      if (['Sick Leave', 'Paid Leave', 'Full Day'].includes(l.type)) {
        let current = new Date(l.startDate);
        let leaveEnd = new Date(l.endDate);
        while (current <= leaveEnd) {
          if (current >= start && current <= end) paidLeaves += 1;
          current.setDate(current.getDate() + 1);
        }
      } else if (l.type === 'Half Day') {
        let current = new Date(l.startDate);
        let leaveEnd = new Date(l.endDate);
        while (current <= leaveEnd) {
          if (current >= start && current <= end) paidLeaves += 0.5;
          current.setDate(current.getDate() + 1);
        }
      }
    });

    // Overtime hours
    let overtimeHours = 0;
    let overtimeAmount = 0;
    if (user.overtime && user.overtime.enabled) {
      attendance.forEach(a => {
        if (a.punchIn && a.punchOut && a.status !== 'absent') {
          const startT = new Date(a.punchIn.time);
          const endT = new Date(a.punchOut.time);
          const diffHours = Math.abs(endT - startT) / (1000 * 60 * 60);
          if (diffHours > user.overtime.thresholdHours) {
            overtimeHours += (diffHours - user.overtime.thresholdHours);
          }
        }
      });
      overtimeAmount = overtimeHours * user.overtime.ratePerHour;
    }

    // Advances / Allowances
    const extras = await StaffExtras.find({
      staff: user._id,
      createdAt: { $gte: start, $lte: end },
      status: 'Approved'
    });

    let allowances = 0;
    let advances = 0;
    extras.forEach(e => {
      if (e.type === 'Allowance') allowances += e.amount;
      else if (e.type === 'Advance') advances += e.amount;
    });

    // Salary estimation
    const basicSalary = user.salary || 0;
    let earnedSalary = 0;
    if (user.staffType === 'Daily') {
      earnedSalary = totalWorked * basicSalary;
    } else {
      // Calculate Sundays
      let paidSundays = 0;
      let unpaidSundays = 0;
      let currentDate = new Date(start);
      while (currentDate <= end) {
        if (currentDate.getDay() === 0) {
          if (user.staffType === 'Regular' || user.staffType === 'Hotel') {
            let monToSatPresent = 0;
            let monToSatLeaves = 0;
            let checkDate = new Date(currentDate);
            checkDate.setDate(checkDate.getDate() - 6);
            
            while (checkDate < currentDate) {
              const cStr = checkDate.toISOString().split('T')[0];
              const a = attendance.find(x => x.date === cStr);
              if (a && a.status !== 'absent') monToSatPresent++;
              
              let onLeave = false;
              leaves.forEach(l => {
                if (cStr >= l.startDate && cStr <= l.endDate) onLeave = true;
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

      const earnedDays = totalWorked + paidLeaves + paidSundays;
      earnedSalary = (earnedDays / totalDaysInCycle) * basicSalary;
    }

    const netPayable = earnedSalary + overtimeAmount + allowances - advances;

    res.json({
      cycleStart: startStr,
      cycleEnd: endStr,
      totalDaysInCycle,
      presentDays: totalWorked,
      paidLeaves,
      absentDays,
      overtimeHours,
      overtimeAmount,
      allowances,
      advances,
      basicSalary,
      earnedSalary,
      estimatedNetPayable: netPayable > 0 ? netPayable : 0
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
