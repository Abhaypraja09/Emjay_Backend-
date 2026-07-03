const mongoose = require('mongoose');
const Order = require('../models/Order');
require('dotenv').config({ path: '../.env' });

const getFinancialYearDates = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  let startDate, endDate;
  if (month < 4) {
    startDate = new Date(`${year - 1}-04-01T00:00:00.000Z`);
    endDate = new Date(`${year}-03-31T23:59:59.999Z`);
  } else {
    startDate = new Date(`${year}-04-01T00:00:00.000Z`);
    endDate = new Date(`${year + 1}-03-31T23:59:59.999Z`);
  }
  return { startDate, endDate };
};

const backfillInvoices = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Get all orders sorted chronologically (oldest first)
    const orders = await Order.find({}).sort({ date: 1, createdAt: 1 });
    console.log(`Found ${orders.length} orders to update invoice format`);

    const counters = {};

    for (const order of orders) {
      const { startDate, endDate } = getFinancialYearDates(order.date);
      const fyKey = `${startDate.getFullYear()}-${endDate.getFullYear()}`;
      const prefix = `E-B-`;
      const key = `${order.companyId}_${fyKey}`;

      if (!counters[key]) {
        counters[key] = 1;
      }

      const invoiceNo = `${prefix}${counters[key].toString().padStart(2, '0')}`;
      counters[key]++; // increment for next order

      order.invoiceNo = invoiceNo;
      await order.save();
      console.log(`Updated Order ${order._id} with Invoice No: ${invoiceNo}`);
    }

    console.log('Update complete!');
    process.exit(0);
  } catch (error) {
    console.error('Error during backfill:', error);
    process.exit(1);
  }
};

backfillInvoices();
