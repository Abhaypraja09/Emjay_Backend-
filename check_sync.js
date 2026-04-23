const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

const Product = require('./models/Product');
const Production = require('./models/Production');
const Order = require('./models/Order');

async function check() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to DB');

    const products = await Product.find({});
    console.log('Products:', products.map(p => ({ id: p._id, name: p.name })));

    const activeProds = await Production.find({ isActive: true }).populate('juiceType');
    console.log('Active Productions:', activeProds.map(p => ({ 
        id: p._id, 
        juice: p.juiceType?.name, 
        sales: p.salesDuringProduction,
        date: p.date 
    })));

    const orders = await Order.find({}).sort({ createdAt: -1 }).limit(5);
    console.log('Recent Orders:', orders.map(o => ({
        id: o._id,
        items: o.items.map(i => ({ juice: i.juiceType, qty: i.quantity })),
        date: o.date
    })));

    await mongoose.disconnect();
}

check();
