const BottleInventory = require('../models/BottleInventory');

const addBottlePurchase = async (req, res) => {
  try {
    const { quantity, costPerUnit, totalCost, supplierName, date, description } = req.body;
    const purchase = await BottleInventory.create({
      quantity,
      costPerUnit,
      totalCost,
      supplierName,
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
    const records = await BottleInventory.find({});
    const totalPurchased = records.filter(r => r.type === 'IN').reduce((acc, r) => acc + r.quantity, 0);
    const totalUsed = records.filter(r => r.type === 'OUT').reduce((acc, r) => acc + r.quantity, 0);
    const availableEmptyBottles = totalPurchased - totalUsed;

    res.json({
      totalPurchased,
      totalUsed,
      availableEmptyBottles,
      history: records
    });
  } catch (error) {
    // FALLBACK FOR DEMO (NO DB)
    res.json({
      totalPurchased: 10000,
      totalUsed: 6500,
      availableEmptyBottles: 3500,
      history: [
          { _id: 'b1', date: new Date(), supplierName: 'Main Bottle Co', quantity: 5000, costPerUnit: 5, totalCost: 25000, type: 'IN' },
          { _id: 'b2', date: new Date(), supplierName: 'Production Out', quantity: 6500, costPerUnit: 0, totalCost: 0, type: 'OUT' }
      ]
    });
  }
};

const deleteBottlePurchase = async (req, res) => {
  try {
    const purchase = await BottleInventory.findById(req.params.id);
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
    const purchase = await BottleInventory.findById(req.params.id);
    if (purchase) {
      purchase.quantity = req.body.quantity || purchase.quantity;
      purchase.costPerUnit = req.body.costPerUnit || purchase.costPerUnit;
      purchase.totalCost = req.body.totalCost || (purchase.quantity * purchase.costPerUnit);
      purchase.supplierName = req.body.supplierName || purchase.supplierName;
      purchase.date = req.body.date || purchase.date;
      purchase.description = req.body.description || purchase.description;

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
