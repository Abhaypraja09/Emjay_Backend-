const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  pricePerUnit: { type: Number, required: true },
  currentStock: { type: Number, default: 0 },
  lowStockThreshold: { type: Number, default: 10 },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
