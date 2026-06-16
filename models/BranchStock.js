const mongoose = require('mongoose');

const branchStockSchema = new mongoose.Schema({
  companyId: { type: String, required: true },
  partyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Party', required: true },
  juiceType: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 0 },
}, { timestamps: true });

branchStockSchema.index({ companyId: 1, partyId: 1, juiceType: 1 }, { unique: true });

module.exports = mongoose.model('BranchStock', branchStockSchema);
