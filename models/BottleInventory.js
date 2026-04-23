const mongoose = require('mongoose');

const bottleInventorySchema = new mongoose.Schema({
  companyId: { type: String, required: true, default: 'emjay-master' },
  quantity: { type: Number, required: true },
  costPerUnit: { type: Number, required: true },
  totalCost: { type: Number, required: true },
  supplierName: { type: String, required: true },
  bottleType: { type: String, enum: ['New', 'Old', 'Caps'], default: 'New' }, // Based on user request
  date: { type: Date, default: Date.now },
  type: { type: String, enum: ['IN', 'OUT'], required: true }, // IN for purchase, OUT for production usage
  description: { type: String }
}, { timestamps: true });

bottleInventorySchema.index({ companyId: 1, date: -1 });
bottleInventorySchema.index({ companyId: 1, type: 1 });

module.exports = mongoose.model('BottleInventory', bottleInventorySchema);
