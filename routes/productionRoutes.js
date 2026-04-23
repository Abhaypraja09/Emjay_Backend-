const express = require('express');
const { createProduction, getProductions, updateProduction, deleteProduction, adjustActiveProduction } = require('../controllers/productionController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post('/', protect, createProduction);
router.get('/', protect, getProductions);
router.put('/:id', protect, updateProduction);
router.delete('/:id', protect, deleteProduction);
router.patch('/:id/adjust', protect, adjustActiveProduction);

module.exports = router;
