const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  shopName: { type: String },
  type: { type: String, enum: ['B2B', 'B2C'], default: 'B2C' },
  items: [
    {
      juiceType: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    }
  ],
  totalAmount: { type: Number, required: true },
  paidAmount: { type: Number, default: 0 },
  dueAmount: { type: Number }, // totalAmount - paidAmount
  paymentStatus: { type: String, enum: ['paid', 'unpaid', 'partial'], default: 'unpaid' },
  orderStatus: { type: String, enum: ['pending', 'delivered', 'returned'], default: 'pending' },
  date: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

orderSchema.index({ createdAt: -1 });
orderSchema.index({ customerName: 'text', shopName: 'text' });

orderSchema.pre('save', function() {
  this.dueAmount = this.totalAmount - this.paidAmount;
  if (this.paidAmount >= this.totalAmount) {
    this.paymentStatus = 'paid';
  } else if (this.paidAmount > 0) {
    this.paymentStatus = 'partial';
  } else {
    this.paymentStatus = 'unpaid';
  }
});

module.exports = mongoose.model('Order', orderSchema);
