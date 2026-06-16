const mongoose = require('mongoose');

const bankLogSchema = new mongoose.Schema({
  companyId: { type: String, required: true, default: 'emjay-master' },
  type: { type: String, enum: ['IN', 'OUT'], required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  paymentMode: { type: String, enum: ['UPI', 'Bank Transfer', 'NEFT/RTGS', 'Cheque', 'Online/UPI'], default: 'Online/UPI' },
  description: { type: String },
  date: { type: Date, default: Date.now },
  referenceId: { type: mongoose.Schema.Types.ObjectId },
}, { timestamps: true });

bankLogSchema.index({ companyId: 1, date: -1 });

module.exports = mongoose.model('BankLog', bankLogSchema);
