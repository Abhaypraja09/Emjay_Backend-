const express = require('express');
const { addBottlePurchase, getBottleStock, updateBottlePurchase, deleteBottlePurchase } = require('../controllers/bottleController');
const { protect, admin } = require('../middleware/auth');
const { upload } = require('../utils/cloudinary');
const router = express.Router();

router.post('/purchase', protect, admin, upload.any(), addBottlePurchase);
router.get('/stock', protect, getBottleStock);
router.put('/:id', protect, admin, updateBottlePurchase);
router.delete('/:id', protect, admin, deleteBottlePurchase);

module.exports = router;
