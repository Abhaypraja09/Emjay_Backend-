const mongoose = require('mongoose');
require('dotenv').config();
const BottleInventory = require('./models/BottleInventory');

async function run() {
    await mongoose.connect(process.env.MONGO_URI);
    const r = await BottleInventory.find({ 
        $or: [
            { supplierName: /cap/i }, 
            { description: /cap/i },
            { bottleType: /cap/i }
        ] 
    });
    console.log('Potential Caps records found:', r.length);
    if(r.length > 0) {
        r.forEach(rec => {
            console.log(`ID: ${rec._id}, BottleType: ${rec.bottleType}, Supplier: ${rec.supplierName}, Qty: ${rec.quantity}`);
        });
    }
    process.exit();
}
run();
