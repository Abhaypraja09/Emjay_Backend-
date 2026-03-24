const mongoose = require('mongoose');

const productionSchema = new mongoose.Schema({
  juiceType: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantityProduced: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

productionSchema.index({ createdAt: -1 });
productionSchema.index({ juiceType: 1 });

module.exports = mongoose.model('Production', productionSchema);
