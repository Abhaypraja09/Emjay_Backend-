const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const path = require('path');

// Route imports
const authRoutes = require('./routes/authRoutes');
const bottleRoutes = require('./routes/bottleRoutes');
const productRoutes = require('./routes/productRoutes');
const productionRoutes = require('./routes/productionRoutes');
const orderRoutes = require('./routes/orderRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const adminStaffRoutes = require('./routes/adminStaffRoutes');
const staffPortalRoutes = require('./routes/staffPortalRoutes');
const partyRoutes = require('./routes/partyRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const reportRoutes = require('./routes/reportRoutes');
const cashRoutes = require('./routes/cashRoutes');


dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
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
app.use('/api/admin/staff', adminStaffRoutes);
app.use('/api/staff-portal', staffPortalRoutes);
app.use('/api/parties', partyRoutes);
app.use('/api/purchases', purchaseRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/cash', cashRoutes);


// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all middleware to serve index.html for any non-API routes (Next.js SPA)
app.use((req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    return res.status(404).json({ message: 'API route not found' });
  }
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('SERVER ERROR:', JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`));
