const express = require('express');
const { createOrder, getOrders, updateOrderStatus, updateOrderPayment, deleteOrder, updateOrder } = require('../controllers/orderController');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

router.post('/', protect, createOrder);
router.get('/', protect, getOrders);
router.put('/:id', protect, admin, updateOrder);
router.delete('/:id', protect, admin, deleteOrder);
router.put('/:id/status', protect, updateOrderStatus);
router.put('/:id/payment', protect, admin, updateOrderPayment);

module.exports = router;
