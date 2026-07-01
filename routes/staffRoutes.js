const express = require('express');
const { getStaff, addStaff, updateStaff, deleteStaff, calculatePayroll, punchIn } = require('../controllers/staffController');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

router.get('/', protect, getStaff);
router.post('/', protect, admin, addStaff);
router.put('/:id', protect, admin, updateStaff);
router.delete('/:id', protect, admin, deleteStaff);
router.post('/payroll/calculate', protect, admin, calculatePayroll);
router.post('/attendance/punch-in', protect, punchIn);

module.exports = router;
