const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, sparse: true, unique: true },
  username: { type: String, sparse: true, unique: true },
  mobile: { type: String },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'branch_admin', 'staff', 'vendor', 'Staff'], default: 'staff' },
  salary: { type: Number, default: 0 },
  companyId: { type: String, required: true, default: 'emjay-master' }, // For Multi-tenancy
  branchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Party' }, // Link to branch
  faceDescriptor: { type: [Number] },
  designation: { type: String },
  joiningDate: { type: Date },
  employmentType: { type: String, enum: ['REGULAR (WITH LEAVE ALLOWANCE)', 'FIXED (30 DAYS / NO LEAVE TRACKING)', 'DAILY WAGE'] },
  staffType: { type: String, enum: ['Regular', 'Fixed', 'Daily'], default: 'Regular' },
  status: { type: String, enum: ['active', 'blocked'], default: 'active' },
  overtime: {
    enabled: { type: Boolean, default: false },
    thresholdHours: { type: Number, default: 9 },
    ratePerHour: { type: Number, default: 100 }
  },
  monthlyTarget: { type: Number, default: 26 },
  monthlyLeaveQuota: { type: Number, default: 4 },
  geofence: {
    lat: { type: Number },
    lng: { type: Number },
    radius: { type: Number, default: 200 }
  },
  shift: {
    startTime: { type: String, default: '09:00 AM' },
    endTime: { type: String, default: '06:00 PM' }
  }
}, { timestamps: true });

userSchema.pre('save', async function() {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
