const mongoose = require('mongoose');
require('dotenv').config();

const models = [
    './models/AuditLog',
    './models/BottleInventory',
    './models/CashLog',
    './models/Order',
    './models/Party',
    './models/Product',
    './models/Production',
    './models/Purchase',
    './models/Staff',
    './models/Transaction'
];

async function clearDummyData() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        for (const modelPath of models) {
            const Model = require(modelPath);
            const modelName = Model.modelName || modelPath.split('/').pop();
            const result = await Model.deleteMany({});
            console.log(`Cleared ${modelName}: ${result.deletedCount} records deleted.`);
        }

        console.log('Dummy data cleared successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Cleanup failed:', error);
        process.exit(1);
    }
}

clearDummyData();
