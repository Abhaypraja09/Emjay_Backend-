const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  phone: { type: String },
  salary: { type: Number, default: 0 },
  joinDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['active', 'inactive', 'on-leave'], default: 'active' },
  aadhaar: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Staff', staffSchema);
