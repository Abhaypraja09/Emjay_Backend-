const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Production = require('./models/Production');

dotenv.config();

const checkDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const prod = await Production.findById('69c27cf846e0dd721451145a');
        console.log('Production Record:', JSON.stringify(prod, null, 2));
        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

checkDB();
