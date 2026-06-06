const mongoose = require('mongoose');

const leaveRequestSchema = new mongoose.Schema({
  staff: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  companyId: { type: String, required: true },
  startDate: { type: String, required: true }, // Format: YYYY-MM-DD
  endDate: { type: String, required: true },   // Format: YYYY-MM-DD
  reason: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  type: { type: String, enum: ['Sick Leave', 'Casual Leave', 'Personal', 'Paid Leave'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('LeaveRequest', leaveRequestSchema);
