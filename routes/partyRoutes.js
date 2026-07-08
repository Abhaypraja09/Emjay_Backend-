const express = require('express');
const { getParties, addParty, updateParty, getTransactions, getAllTransactions, addTransaction, deleteParty, updateTransaction, deleteTransaction, recalculateBalances } = require('../controllers/partyController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.get('/', protect, getParties);
router.post('/', protect, addParty);
router.put('/:id', protect, updateParty);
router.delete('/:id', protect, deleteParty);
router.get('/recalculate', protect, recalculateBalances);
router.get('/all/transactions', protect, getAllTransactions);
router.get('/:partyId/transactions', protect, getTransactions);
router.post('/transaction', protect, addTransaction);
router.put('/transactions/:txId', protect, updateTransaction);
router.delete('/transactions/:txId', protect, deleteTransaction);

module.exports = router;
