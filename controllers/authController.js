const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: 'User already exists' });
    return;
  }

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

const authUser = async (req, res) => {
  const { email, password } = req.body;

  // 1. HARDCODED DEMO LOGIN (Always works even without database)
  if (email === 'admin@emjay.com' && password === 'admin123') {
     return res.json({
        _id: '65f000000000000000000001',
        name: 'Demo Principal (Juice Mgmt)',
        email: 'admin@emjay.com',
        role: 'admin',
        token: generateToken('65f000000000000000000001'),
     });
  }

  // 2. Real Mongoose logic (if DB is connected)
  try {
    const user = await User.findOne({ email });
    if (user && (await user.comparePassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
     res.status(401).json({ message: 'Invalid email or password (DB Disconnected)' });
  }
};

module.exports = { registerUser, authUser };
