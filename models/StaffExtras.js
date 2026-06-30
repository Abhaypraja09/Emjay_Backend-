const mongoose = require('mongoose');

const staffExtrasSchema = new mongoose.Schema({
  staff: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  companyId: { type: String, required: true },
  type: { type: String, enum: ['Advance', 'Loan', 'Allowance'], required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  month: { type: Number }, // derived from date
  year: { type: Number },  // derived from date
  description: { type: String },
  givenBy: { type: String, default: 'Office' },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected', 'Deducted'], default: 'Approved' }
}, { timestamps: true });

module.exports = mongoose.model('StaffExtras', staffExtrasSchema);
