const express = require('express');
const router = express.Router();
const { getCashLogs, addCashLog, deleteCashLog, updateCashLog, transferToMain } = require('../controllers/cashController');
const { protect } = require('../middleware/auth');

router.use(protect);

router.post('/transfer-to-main', transferToMain);
router.get('/', getCashLogs);
router.post('/', addCashLog);
router.delete('/:id', deleteCashLog);
router.put('/:id', updateCashLog);

module.exports = router;
