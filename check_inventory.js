const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

const BottleInventory = require('./models/BottleInventory');

async function check() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected');

    const records = await BottleInventory.find({}).sort({ createdAt: -1 }).limit(10);
    console.log('Last 10 records:');
    records.forEach(r => {
        console.log(`Date: ${r.date}, Type: ${r.type}, BottleType: ${r.bottleType}, Qty: ${r.quantity}, Supplier: ${r.supplierName}`);
    });

    const capsCount = await BottleInventory.countDocuments({ bottleType: 'Caps' });
    console.log('Total Caps records:', capsCount);

    process.exit();
}

check();
