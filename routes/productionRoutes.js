const express = require('express');
const { createProduction, getProductions, updateProduction, deleteProduction } = require('../controllers/productionController');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

router.post('/', protect, createProduction);
router.get('/', protect, getProductions);
router.put('/:id', protect, admin, updateProduction);
router.delete('/:id', protect, admin, deleteProduction);

module.exports = router;
