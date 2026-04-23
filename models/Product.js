const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  companyId: { type: String, required: true, default: 'emjay-master' },
  pricePerUnit: { type: Number, required: true },
  currentStock: { type: Number, default: 0 },
  lowStockThreshold: { type: Number, default: 10 },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
