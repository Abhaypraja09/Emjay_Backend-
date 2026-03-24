const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Product = require('../models/Product');
const BottleInventory = require('../models/BottleInventory');

dotenv.config();

const users = [
  {
    name: 'Admin User',
    email: 'admin@emjay.com',
    password: 'admin123',
    role: 'admin',
  },
  {
    name: 'Staff User',
    email: 'staff@emjay.com',
    password: 'staff123',
    role: 'staff',
  },
];

const products = [
    { name: 'Apple Spark', pricePerUnit: 45, lowStockThreshold: 10 },
    { name: 'Mango Blast', pricePerUnit: 55, lowStockThreshold: 15 },
    { name: 'Orange Tang', pricePerUnit: 50, lowStockThreshold: 10 },
    { name: 'Guava Glow', pricePerUnit: 60, lowStockThreshold: 5 },
    { name: 'Mixed Fruit', pricePerUnit: 65, lowStockThreshold: 8 },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to DB for seeding...');

    await User.deleteMany();
    await Product.deleteMany();
    await BottleInventory.deleteMany();

    await User.create(users);
    await Product.create(products);

    // Add initial bottle stock
    await BottleInventory.create({
        quantity: 1000,
        costPerUnit: 5,
        totalCost: 5000,
        supplierName: 'Main Bottle Co',
        type: 'IN',
        description: 'Store opening stock'
    });

    console.log('Database seeded successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error with seeding: ${error.message}`);
    process.exit(1);
  }
};

seedDB();
