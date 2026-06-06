const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Load env vars
dotenv.config({ path: path.join(__dirname, '.env') });

const Purchase = require('./models/Purchase');

const fixPurchases = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected for migration...');

        const result = await Purchase.updateMany(
            { companyId: { $exists: false } },
            { $set: { companyId: 'emjay-master' } }
        );

        console.log(`Updated ${result.modifiedCount} purchase records with default companyId.`);
        
        process.exit(0);
    } catch (error) {
        console.error('Migration failed:', error.message);
        process.exit(1);
    }
};

fixPurchases();
