const User = require('../models/User');
const Party = require('../models/Party');

const getBranchAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: 'branch_admin', companyId: req.user.companyId })
      .populate('branchId', 'name')
      .select('-password')
      .sort({ createdAt: -1 });
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBranchAdmin = async (req, res) => {
  try {
    const { name, username, email, password, branchId, mobile } = req.body;
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    const user = await User.create({
      name,
      username,
      email,
      password,
      mobile,
      role: 'branch_admin',
      branchId,
      companyId: req.user.companyId
    });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      branchId: user.branchId
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBranchAdmin = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id, companyId: req.user.companyId });
    if (!user) return res.status(404).json({ message: 'Admin not found' });
    await User.deleteOne({ _id: req.params.id });
    res.json({ message: 'Admin removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBranchAdmins,
  createBranchAdmin,
  deleteBranchAdmin
};
