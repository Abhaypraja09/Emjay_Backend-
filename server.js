const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Route imports
const authRoutes = require('./routes/authRoutes');
const bottleRoutes = require('./routes/bottleRoutes');
const productRoutes = require('./routes/productRoutes');
const productionRoutes = require('./routes/productionRoutes');
const orderRoutes = require('./routes/orderRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Map routes
app.use('/api/auth', authRoutes);
app.use('/api/bottles', bottleRoutes);
app.use('/api/products', productRoutes);
app.use('/api/production', productionRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.get('/', (req, res) => {
  res.send('Emjay Brewery API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`));
