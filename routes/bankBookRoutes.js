const express = require('express');
const router = express.Router();
const bankBookController = require('../controllers/bankBookController');
const { protect } = require('../middleware/auth');

router.get('/', protect, bankBookController.getBankLogs);
router.post('/', protect, bankBookController.addBankLog);
router.delete('/:id', protect, bankBookController.deleteBankLog);

module.exports = router;
