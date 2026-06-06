const express = require('express');
const { createProduct, getProducts, updateProduct, deleteProduct, syncStock } = require('../controllers/productController');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

router.post('/', protect, admin, createProduct);
router.get('/', protect, getProducts);
router.post('/sync', protect, syncStock);
router.put('/:id', protect, admin, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

module.exports = router;
