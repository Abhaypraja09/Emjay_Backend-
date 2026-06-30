const mongoose = require('mongoose');

const staffSalaryPaymentSchema = new mongoose.Schema({
  staff: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  companyId: { type: String, required: true },
  month: { type: Number, required: true }, // 0-11
  year: { type: Number, required: true },
  basicSalary: { type: Number, required: true },
  presentDays: { type: Number, default: 0 },
  paidLeaves: { type: Number, default: 0 },
  unpaidAbsents: { type: Number, default: 0 },
  paidSundays: { type: Number, default: 0 },
  unpaidSundays: { type: Number, default: 0 },
  sundaysWorked: { type: Number, default: 0 },
  overtimeHours: { type: Number, default: 0 },
  overtimeAmount: { type: Number, default: 0 },
  totalDaysInCycle: { type: Number, default: 30 },
  cycleStart: { type: String },
  cycleEnd: { type: String },
  earnedSalary: { type: Number, required: true },
  allowances: { type: Number, default: 0 },
  advances: { type: Number, default: 0 },
  bonus: { type: Number, default: 0 },
  deduction: { type: Number, default: 0 },
  amount: { type: Number, required: true }, // Net Payable (Earned + Allowances - Advances)
  finalPaidAmount: { type: Number }, // Amount + Bonus - Deduction
  paymentDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['paid', 'pending'], default: 'paid' }
}, { timestamps: true });

staffSalaryPaymentSchema.index({ staff: 1, month: 1, year: 1 }, { unique: true });

module.exports = mongoose.model('StaffSalaryPayment', staffSalaryPaymentSchema);
