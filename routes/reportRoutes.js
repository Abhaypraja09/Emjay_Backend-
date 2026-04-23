const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const { protect } = require('../middleware/auth');

// All report routes are protected
router.use(protect);

router.get('/production-stock', reportController.getProductionStockReport);
router.get('/bottle-stock', reportController.getBottleStockReport);
router.get('/global-stock', reportController.getGlobalStockReport);

module.exports = router;
