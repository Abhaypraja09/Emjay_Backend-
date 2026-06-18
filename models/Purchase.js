const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ['Raw Materials', 'Bottles', 'Packaging', 'Machinery', 'Utilities', 'Other'], default: 'Raw Materials' },
  quantity: { type: Number },
  unit: { type: String },
  numberOfPieces: { type: Number },
  rate: { type: Number, required: true },
  amount: { type: Number, required: true }
});

const purchaseSchema = new mongoose.Schema({
  companyId: { type: String, required: true, default: 'emjay-master' },
  items: [itemSchema],
  totalCost: { type: Number, required: true },
  invoiceNumber: { type: String },
  supplier: { type: String },
  partyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Party' },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['paid', 'pending', 'partial', 'Cash', 'Online/UPI', 'Due', 'Split'], default: 'Cash' },
  paidCash: { type: Number, default: 0 },
  paidOnline: { type: Number, default: 0 },
  dueAmount: { type: Number, default: 0 },
  description: { type: String },
  billImage: { type: String }, // Base64 string for image upload
}, { timestamps: true });

purchaseSchema.index({ companyId: 1, date: -1 });

module.exports = mongoose.model('Purchase', purchaseSchema);
