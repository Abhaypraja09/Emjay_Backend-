const express = require('express');
const { getPurchases, addPurchase, updatePurchase, deletePurchase, getPurchaseStats } = require('../controllers/purchaseController');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

router.get('/', protect, getPurchases);
router.post('/', protect, admin, addPurchase);
router.put('/:id', protect, admin, updatePurchase);
router.delete('/:id', protect, admin, deletePurchase);
router.get('/stats', protect, getPurchaseStats);

module.exports = router;
