const Purchase = require('../models/Purchase');

exports.getPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find().sort({ date: -1 });
    res.json(purchases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addPurchase = async (req, res) => {
  try {
    const purchase = new Purchase(req.body);
    await purchase.save();
    res.status(201).json(purchase);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updatePurchase = async (req, res) => {
  try {
    const purchase = await Purchase.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!purchase) return res.status(404).json({ message: 'Purchase not found' });
    res.json(purchase);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deletePurchase = async (req, res) => {
  try {
    const purchase = await Purchase.findByIdAndDelete(req.params.id);
    if (!purchase) return res.status(404).json({ message: 'Purchase not found' });
    res.json({ message: 'Purchase record deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPurchaseStats = async (req, res) => {
    try {
        const stats = await Purchase.aggregate([
            { $group: { _id: null, totalCost: { $sum: "$cost" }, pending: { $sum: { $cond: [{ $eq: ["$status", "pending"]}, "$cost", 0] } } } }
        ]);
        res.json(stats[0] || { totalCost: 0, pending: 0 });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
