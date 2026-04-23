const express = require('express');
const { getParties, addParty, getTransactions, addTransaction, deleteParty } = require('../controllers/partyController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.get('/', protect, getParties);
router.post('/', protect, addParty);
router.delete('/:id', protect, deleteParty);
router.get('/:partyId/transactions', protect, getTransactions);
router.post('/transaction', protect, addTransaction);

module.exports = router;
