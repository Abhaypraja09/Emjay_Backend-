const express = require('express');
const { createOrder, getOrders, updateOrderStatus, updateOrderPayment, deleteOrder, updateOrder, fetchNextInvoiceNo } = require('../controllers/orderController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.get('/next-invoice', protect, fetchNextInvoiceNo);
router.post('/', protect, createOrder);
router.get('/', protect, getOrders);
router.put('/:id', protect, updateOrder);
router.delete('/:id', protect, deleteOrder);
router.put('/:id/status', protect, updateOrderStatus);
router.put('/:id/payment', protect, updateOrderPayment);

module.exports = router;
