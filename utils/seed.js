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

const products = [];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to DB for seeding...');

    await User.deleteMany();
    await Product.deleteMany();
    await BottleInventory.deleteMany();

    await User.create(users);
    
    console.log('Database seeded successfully (Users only)!');

    console.log('Database seeded successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error with seeding: ${error.message}`);
    process.exit(1);
  }
};

seedDB();
