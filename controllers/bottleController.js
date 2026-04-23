const BottleInventory = require('../models/BottleInventory');

const addBottlePurchase = async (req, res) => {
  try {
    const { quantity, costPerUnit, totalCost, supplierName, date, description, bottleType } = req.body;
    const purchase = await BottleInventory.create({
      companyId: req.user.companyId,
      quantity,
      costPerUnit,
      totalCost,
      supplierName,
      bottleType: bottleType || 'New',
      date: date || Date.now(),
      type: 'IN',
      description
    });

    res.status(201).json(purchase);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getBottleStock = async (req, res) => {
  try {
    const { month, year } = req.query;
    const query = { companyId: req.user.companyId };

    if (month && year) {
      const startDate = new Date(parseInt(year), parseInt(month) - 1, 1);
      const endDate = new Date(parseInt(year), parseInt(month), 0, 23, 59, 59, 999);
      query.date = { $gte: startDate, $lte: endDate };
    }

    const records = await BottleInventory.find(query).sort({ date: 1 });
    
    // Bottles Stats (New + Old)
    const bottles = records.filter(r => r.bottleType !== 'Caps');
    const totalPurchased = bottles.filter(r => r.type === 'IN').reduce((acc, r) => acc + r.quantity, 0);
    const totalUsed = bottles.filter(r => r.type === 'OUT').reduce((acc, r) => acc + r.quantity, 0);
    const availableEmptyBottles = totalPurchased - totalUsed;

    // Caps Stats
    const caps = records.filter(r => r.bottleType === 'Caps');
    const totalCapsPurchased = caps.filter(r => r.type === 'IN').reduce((acc, r) => acc + r.quantity, 0);
    const totalCapsUsed = caps.filter(r => r.type === 'OUT').reduce((acc, r) => acc + r.quantity, 0);
    const availableCaps = totalCapsPurchased - totalCapsUsed;

    res.json({
      totalPurchased, // Total Buy Bottles
      totalUsed,      // Total Production
      availableEmptyBottles, // Empty Bottles
      availableCaps,
      totalCapsPurchased,
      totalCapsUsed,
      history: records
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBottlePurchase = async (req, res) => {
  try {
    const purchase = await BottleInventory.findOne({ _id: req.params.id, companyId: req.user.companyId });
    if (purchase) {
      await purchase.deleteOne();
      res.json({ message: 'Purchase record removed' });
    } else {
      res.status(404).json({ message: 'Purchase record not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateBottlePurchase = async (req, res) => {
  try {
    const purchase = await BottleInventory.findOne({ _id: req.params.id, companyId: req.user.companyId });
    if (purchase) {
        Object.assign(purchase, req.body);
        if (req.body.quantity && req.body.costPerUnit) {
            purchase.totalCost = req.body.quantity * req.body.costPerUnit;
        }
      const updated = await purchase.save();
      res.json(updated);
    } else {
      res.status(404).json({ message: 'Purchase record not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addBottlePurchase, getBottleStock, deleteBottlePurchase, updateBottlePurchase };
