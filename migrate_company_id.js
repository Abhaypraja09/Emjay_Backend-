const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

async function migrate() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB');
        
        const db = mongoose.connection.db;
        
        const productsResult = await db.collection('products').updateMany(
            { companyId: { $exists: false } },
            { $set: { companyId: 'emjay-master' } }
        );
        console.log('Products Updated:', productsResult.modifiedCount);
        
        const ordersResult = await db.collection('orders').updateMany(
            { companyId: { $exists: false } },
            { $set: { companyId: 'emjay-master' } }
        );
        console.log('Orders Updated:', ordersResult.modifiedCount);
        
        const usersResult = await db.collection('users').updateMany(
            { companyId: { $exists: false } },
            { $set: { companyId: 'emjay-master' } }
        );
        console.log('Users Updated:', usersResult.modifiedCount);

        process.exit(0);
    } catch (err) {
        console.error('Migration failed:', err);
        process.exit(1);
    }
}

migrate();
