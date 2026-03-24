const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.set('bufferCommands', false);
    const conn = await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 1000 });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    console.log('--- RUNNING IN DEMO MODE (Instant Responses) ---');
  }
};

module.exports = connectDB;
