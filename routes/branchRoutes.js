const express = require('express');
const router = express.Router();
const branchController = require('../controllers/branchController');
const { protect } = require('../middleware/auth');

router.use(protect);

router.get('/', branchController.getBranchStocks);
router.post('/transfer-in', branchController.transferIn);
router.post('/transfer-out', branchController.transferOut);

module.exports = router;
