require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB Connected');
    try {
      await mongoose.connection.collection('users').dropIndex('email_1');
      console.log('Dropped email_1 index');
    } catch(err) { console.log(err.message); }
    try {
      await mongoose.connection.collection('users').dropIndex('username_1');
      console.log('Dropped username_1 index');
    } catch(err) { console.log(err.message); }
    process.exit(0);
  });
