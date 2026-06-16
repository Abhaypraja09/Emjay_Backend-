const mongoose = require('mongoose');

const branchTransferSchema = new mongoose.Schema({
  companyId: { type: String, required: true },
  partyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Party', required: true },
  type: { type: String, enum: ['IN', 'OUT'], required: true }, // IN: To Branch, OUT: Sale from Branch
  juiceType: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  rate: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  description: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

branchTransferSchema.index({ companyId: 1, partyId: 1, date: -1 });

module.exports = mongoose.model('BranchTransfer', branchTransferSchema);
