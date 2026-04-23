const mongoose = require('mongoose');

const productionSchema = new mongoose.Schema({
  juiceType: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  companyId: { type: String, required: true, default: 'emjay-master' },
  nameOfVerk: { type: String, default: 'Internal' }, // Batch Identifier
  footValue: { type: String }, // e.g. 1000/2000
  bottleType: { type: String, enum: ['New', 'Old'], default: 'New' },
  sizeCategory: { type: String, default: '500ml' }, // 100ml, 500ml, 1kg, etc.
  costValue: { type: Number, default: 0 },
  openingBalance: { type: Number, default: 0 },
  quantityProduced: { type: Number, required: true }, 
  salesDuringProduction: { type: Number, default: 0 },
  date: { type: Date, default: Date.now }, 
  isActive: { type: Boolean, default: true },
  bottleAuditId: { type: mongoose.Schema.Types.ObjectId, ref: 'BottleInventory' }, 
  capAuditId: { type: mongoose.Schema.Types.ObjectId, ref: 'BottleInventory' }, // Link for caps
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

productionSchema.index({ companyId: 1, date: -1 });
productionSchema.index({ companyId: 1, juiceType: 1 });
productionSchema.index({ createdAt: -1 });
productionSchema.index({ isActive: 1 });

module.exports = mongoose.model('Production', productionSchema);
