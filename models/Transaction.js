const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  partyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Party', required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ['credit', 'debit'], required: true }, // Credit = we receive/increase balance, Debit = we pay/decrease balance
  description: { type: String },
  purchaseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Purchase' },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
