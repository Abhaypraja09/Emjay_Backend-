const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  item: { type: String, required: true },
  category: { type: String, enum: ['Raw Materials', 'Bottles', 'Packaging', 'Machinery', 'Utilities', 'Other'], default: 'Raw Materials' },
  quantity: { type: String },
  unit: { type: String },
  cost: { type: Number, required: true },
  supplier: { type: String },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['paid', 'pending', 'partial'], default: 'paid' },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Purchase', purchaseSchema);
