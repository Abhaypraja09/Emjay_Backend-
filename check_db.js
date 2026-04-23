const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Production = require('./models/Production');
const Product = require('./models/Product');

dotenv.config();

const checkDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB');
        
        const productions = await Production.find({}).limit(5);
        console.log('Recent Productions:', JSON.stringify(productions, null, 2));
        
        const products = await Product.find({});
        console.log('Products:', JSON.stringify(products, null, 2));
        
        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

checkDB();
