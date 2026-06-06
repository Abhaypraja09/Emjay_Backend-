const mongoose = require('mongoose');

const staffSalaryPaymentSchema = new mongoose.Schema({
  staff: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  companyId: { type: String, required: true },
  month: { type: Number, required: true }, // 0-11
  year: { type: Number, required: true },
  basicSalary: { type: Number, required: true },
  presentDays: { type: Number, default: 0 },
  paidLeaves: { type: Number, default: 0 },
  earnedSalary: { type: Number, required: true },
  allowances: { type: Number, default: 0 },
  advances: { type: Number, default: 0 },
  amount: { type: Number, required: true }, // Net Payable
  paymentDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['paid', 'pending'], default: 'paid' }
}, { timestamps: true });

staffSalaryPaymentSchema.index({ staff: 1, month: 1, year: 1 }, { unique: true });

module.exports = mongoose.model('StaffSalaryPayment', staffSalaryPaymentSchema);
