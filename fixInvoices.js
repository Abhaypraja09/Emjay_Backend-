require('dotenv').config();
const mongoose = require('mongoose');
const Order = require('./models/Order');

async function fixInvoices() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Connected to DB');

  const orders = await Order.find({ invoiceNo: { $regex: /^E-B-/ } });
  let count = 0;
  for (const order of orders) {
    const oldInvoiceNo = order.invoiceNo;
    const newInvoiceNo = order.invoiceNo.replace(/^E-B-/, 'EB-');
    order.invoiceNo = newInvoiceNo;
    await order.save();
    count++;
    console.log(`Updated ${oldInvoiceNo} to ${newInvoiceNo}`);
  }

  console.log(`Updated ${count} orders`);
  mongoose.disconnect();
}

fixInvoices().catch(console.error);
