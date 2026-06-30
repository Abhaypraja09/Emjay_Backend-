const express = require('express');
const {
  addStaff,
  updateStaff,
  getStaff,
  getAttendance,
  getLeaves,
  updateLeave,
  processSalary,
  getDashboardStats,
  addManualDuty,
  getAdvances,
  recordAdvance,
  getPayrollData,
  deleteAttendance,
  markOutAttendance,
  deleteAdvance,
  updateAdvance,
  bulkProcessSalary,
  settlePayment,
  blockStaff,
  markAsDue
} = require('../controllers/adminStaffController');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

router.get('/dashboard-stats', protect, admin, getDashboardStats);
router.post('/manual-duty', protect, admin, addManualDuty);
router.get('/advances', protect, admin, getAdvances);
router.post('/advance', protect, admin, recordAdvance);
router.get('/payroll-data', protect, admin, getPayrollData);
router.post('/salary/bulk-process', protect, admin, bulkProcessSalary);
router.post('/salary/settle', protect, admin, settlePayment);
router.delete('/salary/:id', protect, admin, markAsDue);
router.delete('/attendance/:id', protect, admin, deleteAttendance);
router.put('/attendance/:id/mark-out', protect, admin, markOutAttendance);
router.delete('/advances/:id', protect, admin, deleteAdvance);
router.put('/advances/:id', protect, admin, updateAdvance);

router.post('/', protect, admin, addStaff);
router.put('/:id', protect, admin, updateStaff);
router.put('/:id/block', protect, admin, blockStaff);
router.get('/', protect, admin, getStaff);
router.get('/attendance', protect, admin, getAttendance);
router.get('/leaves', protect, admin, getLeaves);
router.put('/leaves/:id', protect, admin, updateLeave);
router.post('/salary/process', protect, admin, processSalary);

module.exports = router;
