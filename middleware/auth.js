const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      console.log('--- AUTH DEBUG --- Token ID:', decoded.id);

      // FALLBACK FOR DEMO (NO DB)
      if (decoded.id === '65f000000000000000000001' || decoded.id === 'd3m0-4dm1n-1d') {
          console.log('--- AUTH DEBUG --- Detected Demo Admin');
          req.user = { _id: '65f000000000000000000001', name: 'Demo Principal', role: 'admin' };
          return next();
      }

      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      console.error('--- AUTH DEBUG --- Error:', error.message);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    if (!res.headersSent) {
        console.log('--- AUTH DEBUG --- No Token Provided');
        res.status(401).json({ message: 'Not authorized, no token' });
    }
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(401).json({ message: 'Not authorized as an admin' });
  }
};

module.exports = { protect, admin };
