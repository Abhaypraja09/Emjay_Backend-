const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  companyId: { type: String, required: true, default: 'emjay-master' },
  item: { type: String, required: true },
  category: { type: String, enum: ['Raw Materials', 'Bottles', 'Packaging', 'Machinery', 'Utilities', 'Other'], default: 'Raw Materials' },
  quantity: { type: String },
  unit: { type: String },
  cost: { type: Number, required: true },
  supplier: { type: String },
  partyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Party' },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['paid', 'pending', 'partial', 'Cash', 'Online/UPI', 'Due'], default: 'Cash' },
  description: { type: String },
}, { timestamps: true });

purchaseSchema.index({ companyId: 1, date: -1 });

module.exports = mongoose.model('Purchase', purchaseSchema);
