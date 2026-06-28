const express = require('express');
const router = express.Router();
const { getCashLogs, addCashLog, deleteCashLog, updateCashLog } = require('../controllers/cashController');
const { protect } = require('../middleware/auth');

router.use(protect);

router.get('/', getCashLogs);
router.post('/', addCashLog);
router.delete('/:id', deleteCashLog);
router.put('/:id', updateCashLog);

module.exports = router;
