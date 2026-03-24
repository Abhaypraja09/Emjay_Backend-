const express = require('express');
const { getDashboardStats, getSalesChartData } = require('../controllers/dashboardController');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

router.get('/stats', protect, admin, getDashboardStats);
router.get('/sales-chart', protect, admin, getSalesChartData);

module.exports = router;
