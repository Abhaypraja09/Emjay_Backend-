const StaffAttendance = require('../models/StaffAttendance');
const LeaveRequest = require('../models/LeaveRequest');
const StaffSalaryPayment = require('../models/StaffSalaryPayment');
const User = require('../models/User');

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

    // Verify face
    if (!user.faceDescriptor || user.faceDescriptor.length === 0) {
      return res.status(400).json({ message: 'Face not registered. Please register your face first.' });
    }
    
    // Calculate Euclidean distance
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
        return res.status(400).json({ message: 'Out of Geofence! You must be at the office to punch in.' });
      }
    }

    const existing = await StaffAttendance.findOne({ staff: req.user._id, date: today });
    if (existing) {
      return res.status(400).json({ message: 'Already punched in today' });
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
    if (month && year) {
      const regex = new RegExp(`^${year}-${String(month).padStart(2, '0')}`);
      filter.date = { $regex: regex };
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
    const salaries = await StaffSalaryPayment.find({ staff: req.user._id }).sort({ year: -1, month: -1 });
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
