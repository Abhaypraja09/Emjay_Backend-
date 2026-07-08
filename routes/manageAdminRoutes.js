const express = require('express');
const {
  getBranchAdmins,
  createBranchAdmin,
  deleteBranchAdmin
} = require('../controllers/manageAdminController');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

router.route('/')
  .get(protect, admin, getBranchAdmins)
  .post(protect, admin, createBranchAdmin);

router.route('/:id')
  .delete(protect, admin, deleteBranchAdmin);

module.exports = router;
