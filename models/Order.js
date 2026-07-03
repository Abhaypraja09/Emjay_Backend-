const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  companyId: { type: String, required: true, default: 'emjay-master' },
  partyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Party' },
  customerName: { type: String, required: true },
  shopName: { type: String },
  type: { type: String, enum: ['B2B', 'B2C', 'Customer', 'Branch Transfer', 'Distributor'], default: 'B2C' },
  invoiceNo: { type: String },
  items: [
    {
      juiceType: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    }
  ],
  totalAmount: { type: Number, required: true },
  gst: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  grandTotal: { type: Number },
  paidAmount: { type: Number, default: 0 },
  dueAmount: { type: Number },
  paidCash: { type: Number, default: 0 },
  paidOnline: { type: Number, default: 0 },
  sourceBranchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Party' },
  paymentMode: { type: String, enum: ['Cash', 'UPI', 'Bank Transfer', 'Credit', 'Due', 'Split'], default: 'Cash' },
  paymentStatus: { type: String, enum: ['paid', 'unpaid', 'partial'], default: 'unpaid' },
  orderStatus: { type: String, enum: ['pending', 'delivered', 'returned'], default: 'pending' },
  date: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

orderSchema.index({ companyId: 1, createdAt: -1 });
orderSchema.index({ companyId: 1, date: -1 });
orderSchema.index({ createdAt: -1 });
orderSchema.index({ customerName: 'text', shopName: 'text' });

orderSchema.pre('save', function() {
  this.grandTotal = this.totalAmount + (this.gst || 0) - (this.discount || 0);
  this.dueAmount = this.grandTotal - this.paidAmount;
  if (this.paidAmount >= this.grandTotal) {
    this.paymentStatus = 'paid';
  } else if (this.paidAmount > 0) {
    this.paymentStatus = 'partial';
  } else {
    this.paymentStatus = 'unpaid';
  }
});

module.exports = mongoose.model('Order', orderSchema);
