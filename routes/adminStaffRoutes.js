const express = require('express');
const {
  addStaff,
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
  bulkProcessSalary
} = require('../controllers/adminStaffController');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

router.get('/dashboard-stats', protect, admin, getDashboardStats);
router.post('/manual-duty', protect, admin, addManualDuty);
router.get('/advances', protect, admin, getAdvances);
router.post('/advance', protect, admin, recordAdvance);
router.get('/payroll-data', protect, admin, getPayrollData);
router.post('/salary/bulk-process', protect, admin, bulkProcessSalary);
router.delete('/attendance/:id', protect, admin, deleteAttendance);

router.post('/', protect, admin, addStaff);
router.get('/', protect, admin, getStaff);
router.get('/attendance', protect, admin, getAttendance);
router.get('/leaves', protect, admin, getLeaves);
router.put('/leaves/:id', protect, admin, updateLeave);
router.post('/salary/process', protect, admin, processSalary);

module.exports = router;
