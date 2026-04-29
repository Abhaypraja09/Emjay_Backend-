const mongoose = require('mongoose');

const cashLogSchema = new mongoose.Schema({
  companyId: { type: String, required: true, default: 'emjay-master' },
  type: { type: String, enum: ['IN', 'OUT'], required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true }, // e.g. 'Sale', 'Purchase', 'Salary', 'Rent', 'Other'
  paymentMode: { type: String, enum: ['Cash', 'UPI', 'Bank Transfer'], default: 'Cash' },
  description: { type: String },
  date: { type: Date, default: Date.now },
  referenceId: { type: mongoose.Schema.Types.ObjectId }, // Link to Order, Purchase, etc.
}, { timestamps: true });

cashLogSchema.index({ companyId: 1, date: -1 });

module.exports = mongoose.model('CashLog', cashLogSchema);
