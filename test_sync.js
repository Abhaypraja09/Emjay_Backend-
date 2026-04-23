const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

const Product = require('./models/Product');
const Production = require('./models/Production');
const Order = require('./models/Order');

async function testSync() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to DB');

    // 1. Get a product
    const product = await Product.findOne({});
    if (!product) {
        console.log('No products found');
        return await mongoose.disconnect();
    }
    console.log('Using product:', product.name, product._id);

    // 2. Ensure an active production exists for this product
    let activeProd = await Production.findOne({ juiceType: product._id, isActive: true });
    if (!activeProd) {
        console.log('Creating active production for test...');
        activeProd = await Production.create({
            juiceType: product._id,
            quantityProduced: 1000,
            nameOfVerk: 'Test Batch',
            isActive: true,
            date: new Date()
        });
    }
    const initialSales = activeProd.salesDuringProduction || 0;
    console.log('Initial Sales on Production:', initialSales);

    // 3. Simulate order creation logic (copy-paste from orderController.js)
    const item = { juiceType: product._id, quantity: 50 };
    
    // Logic from orderController:
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    let prodEntry = await Production.findOne({ 
        juiceType: item.juiceType, 
        date: { $gte: today, $lt: tomorrow } 
    }).sort({ createdAt: -1 });

    if (!prodEntry) {
        prodEntry = await Production.findOne({ 
            juiceType: item.juiceType, 
            isActive: true 
        }).sort({ createdAt: -1 });
    }

    if (!prodEntry) {
        prodEntry = await Production.create({
            juiceType: item.juiceType,
            date: new Date(),
            quantityProduced: 0,
            nameOfVerk: 'Sales Registry',
            isActive: false
        });
    }

    if (prodEntry) {
        console.log('Found/Created prodEntry:', prodEntry._id, prodEntry.nameOfVerk);
        prodEntry.salesDuringProduction += Number(item.quantity);
        await prodEntry.save();
    }

    // 4. Verify
    const updatedProd = await Production.findById(prodEntry._id);
    console.log('Updated Sales on Production:', updatedProd.salesDuringProduction);

    if (updatedProd.salesDuringProduction === initialSales + 50) {
        console.log('✅ SYNC TEST PASSED');
    } else {
        console.log('❌ SYNC TEST FAILED');
    }

    // Cleanup if it was a skeletal record
    if (prodEntry.nameOfVerk === 'Sales Registry') {
        // await Production.deleteOne({ _id: prodEntry._id });
    }

    await mongoose.disconnect();
}

testSync();
