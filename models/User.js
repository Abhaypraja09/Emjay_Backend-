const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, sparse: true, unique: true },
  username: { type: String, sparse: true, unique: true },
  mobile: { type: String },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'staff', 'vendor', 'Staff'], default: 'staff' },
  salary: { type: Number, default: 0 },
  companyId: { type: String, required: true, default: 'emjay-master' }, // For Multi-tenancy
  faceDescriptor: { type: [Number] },
  designation: { type: String },
  joiningDate: { type: Date },
  employmentType: { type: String, enum: ['REGULAR (WITH LEAVE ALLOWANCE)', 'FIXED (30 DAYS / NO LEAVE TRACKING)'] },
  monthlyLeaveQuota: { type: Number, default: 0 },
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

userSchema.index({ email: 1 }, { sparse: true });
userSchema.index({ username: 1 }, { sparse: true });

userSchema.pre('save', async function() {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
