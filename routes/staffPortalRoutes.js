const express = require('express');
const {
  getStatus,
  punchIn,
  punchOut,
  getHistory,
  applyLeave,
  getLeaves,
  getSalaryCycles,
  registerFace
} = require('../controllers/staffPortalController');
const { protect } = require('../middleware/auth');
const router = express.Router();

// Middleware to ensure user is Staff
const staffAuth = (req, res, next) => {
  if (req.user && (req.user.role === 'Staff' || req.user.role === 'staff')) {
    next();
  } else {
    res.status(401).json({ message: 'Not authorized as a Staff member' });
  }
};

router.get('/status', protect, staffAuth, getStatus);
router.post('/register-face', protect, staffAuth, registerFace);
router.post('/punch-in', protect, staffAuth, punchIn);
router.post('/punch-out', protect, staffAuth, punchOut);
router.get('/history', protect, staffAuth, getHistory);
router.post('/leave', protect, staffAuth, applyLeave);
router.get('/leaves', protect, staffAuth, getLeaves);
router.get('/salary-cycles', protect, staffAuth, getSalaryCycles);

module.exports = router;
