const mongoose = require('mongoose');

const bottleInventorySchema = new mongoose.Schema({
  quantity: { type: Number, required: true },
  costPerUnit: { type: Number, required: true },
  totalCost: { type: Number, required: true },
  supplierName: { type: String, required: true },
  date: { type: Date, default: Date.now },
  type: { type: String, enum: ['IN', 'OUT'], required: true }, // IN for purchase, OUT for production usage
  description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('BottleInventory', bottleInventorySchema);
