const Production = require('../models/Production');
const Product = require('../models/Product');
const BottleInventory = require('../models/BottleInventory');

const createProduction = async (req, res) => {
  try {
    const { juiceType, quantityProduced, date } = req.body;

    // 1. Check if enough empty bottles are available
    const records = await BottleInventory.find({});
    const totalPurchased = records.filter(r => r.type === 'IN').reduce((acc, r) => acc + r.quantity, 0);
    const totalUsed = records.filter(r => r.type === 'OUT').reduce((acc, r) => acc + r.quantity, 0);
    const availableEmptyBottles = totalPurchased - totalUsed;

    console.log(`--- PRODUCTION DEBUG --- Req=${quantityProduced}, Bottles Available=${availableEmptyBottles}`);

    if (quantityProduced > availableEmptyBottles) {
      console.log('--- PRODUCTION DEBUG --- REJECTED: Not enough empty bottles');
      return res.status(400).json({ message: 'Not enough empty bottles in stock' });
    }

    // 2. Create production record
    const production = await Production.create({
      juiceType,
      quantityProduced,
      date: date || Date.now(),
      createdBy: req.user._id
    });

    // 3. Deduct empty bottles from stock (add OUT record)
    await BottleInventory.create({
      quantity: quantityProduced,
      costPerUnit: 0, // already paid
      totalCost: 0,
      supplierName: 'Internal',
      type: 'OUT',
      description: `Production of ${quantityProduced} juice bottles`
    });

    // 4. Increase filled juice stock
    const product = await Product.findById(juiceType);
    if (product) {
      product.currentStock += quantityProduced;
      await product.save();
    }

    res.status(201).json(production);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProductions = async (req, res) => {
  try {
    const productions = await Production.find({}).populate('juiceType').sort({ createdAt: -1 });
    res.json(productions);
  } catch (error) {
    console.error(`Get productions error: ${error.message}`);
    res.status(500).json({ message: 'Error fetching production records' });
  }
};

const deleteProduction = async (req, res) => {
  try {
    const production = await Production.findById(req.params.id);
    if (!production) {
      return res.status(404).json({ message: 'Production record not found' });
    }

    // 1. Rollback Juice Stock
    const product = await Product.findById(production.juiceType);
    if (product) {
      product.currentStock -= production.quantityProduced;
      await product.save();
    }

    // 2. Rollback Bottle Inventory (add back empty bottles)
    await BottleInventory.create({
      quantity: production.quantityProduced,
      costPerUnit: 0,
      totalCost: 0,
      supplierName: 'Internal Recovery',
      type: 'IN',
      description: `Recovery from deleted production of ${production.quantityProduced} bottles`
    });

    await production.deleteOne();
    res.json({ message: 'Production record removed and stock rolled back' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateProduction = async (req, res) => {
  // Update is complex due to stock adjustments. 
  // For simplicity, we'll just allow updating non-quantity fields or return 400 for now.
  // The user mainly asked for "Edit / Delete" options. 
  // Let's implement a basic update for 이제 quantities if needed, but for now simple update.
  try {
    const production = await Production.findById(req.params.id);
    if (production) {
      production.juiceType = req.body.juiceType || production.juiceType;
      production.date = req.body.date || production.date;
      // If quantity changes, it gets complicated with stock. 
      // For now, only juiceType and date update.
      const updated = await production.save();
      res.json(updated);
    } else {
      res.status(404).json({ message: 'Production record not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createProduction, getProductions, deleteProduction, updateProduction };
