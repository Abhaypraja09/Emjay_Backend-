const express = require('express');
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

router.post('/', protect, admin, createProduct);
router.get('/', protect, getProducts);
router.put('/:id', protect, admin, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

module.exports = router;
