const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Order = require('./models/Order');
const Product = require('./models/Product');

dotenv.config();

async function check() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const o = await Order.findOne({ customerName: 'ABC' });
        if (o) {
            console.log('--- DB DATA ---');
            console.log('QTY:', o.items[0].quantity);
            console.log('TOTAL:', o.totalAmount);
        }
 else {
            console.log('Order ABC not found');
        }
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

check();
