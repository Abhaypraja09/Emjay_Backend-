const mongoose = require('mongoose');

const partySchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['customer', 'supplier', 'bottle_supplier'], required: true },
  isBranch: { type: Boolean, default: false },
  phone: { type: String },
  address: { type: String },
  gstRegistered: { type: Boolean, default: false },
  gstNumber: { type: String },
  openingBalance: { type: Number, default: 0 }, // Initial balance at creation
  balance: { type: Number, default: 0 }, // Positive = They owe us, Negative = We owe them
}, { timestamps: true });

module.exports = mongoose.model('Party', partySchema);
