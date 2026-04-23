const express = require('express');
const { getStaff, addStaff, updateStaff, deleteStaff } = require('../controllers/staffController');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

router.get('/', protect, getStaff);
router.post('/', protect, admin, addStaff);
router.put('/:id', protect, admin, updateStaff);
router.delete('/:id', protect, admin, deleteStaff);

module.exports = router;
