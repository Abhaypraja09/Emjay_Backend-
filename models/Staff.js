const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  phone: { type: String },
  email: { type: String, unique: true, sparse: true },
  password: { type: String },
  salary: { type: Number, default: 0 },
  joinDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['active', 'inactive', 'on-leave'], default: 'active' },
  aadhaar: { type: String },
  staffType: { type: String, enum: ['Regular', 'Fix', 'Daily Wages', 'Daily'], default: 'Regular' },
  monthlyLeaveQuota: { type: Number, default: 4 },
  overtime: {
    enabled: { type: Boolean, default: false },
    thresholdHours: { type: Number, default: 9 },
    ratePerHour: { type: Number, default: 0 }
  },
  geofence: {
    lat: { type: Number },
    lng: { type: Number },
    radius: { type: Number, default: 500 }
  },
  shift: {
    startTime: { type: String, default: '09:00' },
    endTime: { type: String, default: '18:00' }
  }
}, { timestamps: true });

module.exports = mongoose.model('Staff', staffSchema);
