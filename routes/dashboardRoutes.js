const express = require('express');
const { getDashboardStats, getSalesChartData, getDailyReport } = require('../controllers/dashboardController');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

router.get('/stats', protect, admin, getDashboardStats);
router.get('/sales-chart', protect, admin, getSalesChartData);
router.get('/daily-report', protect, admin, getDailyReport);

module.exports = router;
