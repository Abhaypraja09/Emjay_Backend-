const Production = require('../models/Production');
const Product = require('../models/Product');
const BottleInventory = require('../models/BottleInventory');

const createProduction = async (req, res) => {
  console.log('--- STARTING PRODUCTION CREATE (PRECISION LINK) ---');
  
  try {
    const { 
        juiceType, 
        quantityProduced, 
        date, 
        nameOfVerk, 
        footValue, 
        openingBalance, 
        bottleType, 
        sizeCategory, 
        costValue 
    } = req.body;

    const qty = Number(quantityProduced) || 0;

    if (!juiceType || qty <= 0 || !req.user) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // 1. STRICT BOTTLE & CAP CHECK
    const records = await BottleInventory.find({ companyId: req.user.companyId });
    
    // Bottles check
    const bottlesIn = records.filter(r => r.type === 'IN' && r.bottleType !== 'Caps').reduce((acc, r) => acc + r.quantity, 0);
    const bottlesOut = records.filter(r => r.type === 'OUT' && r.bottleType !== 'Caps').reduce((acc, r) => acc + r.quantity, 0);
    const availableEmptyBottles = bottlesIn - bottlesOut;

    // Caps check
    const capsIn = records.filter(r => r.type === 'IN' && r.bottleType === 'Caps').reduce((acc, r) => acc + r.quantity, 0);
    const capsOut = records.filter(r => r.type === 'OUT' && r.bottleType === 'Caps').reduce((acc, r) => acc + r.quantity, 0);
    const availableCaps = capsIn - capsOut;

    if (qty > availableEmptyBottles) {
        return res.status(400).json({ 
            message: `NOT ENOUGH BOTTLES! You need ${qty}, but only ${availableEmptyBottles} avail.` 
        });
    }
    
    if (qty > availableCaps) {
        return res.status(400).json({ 
            message: `NOT ENOUGH CAPS! You need ${qty}, but only ${availableCaps} avail.` 
        });
    }

    // 2. CREATE BOTTLE & CAP TRANSACTIONS
    const bottleAudit = await BottleInventory.create({
      companyId: req.user.companyId,
      quantity: qty,
      costPerUnit: 0,
      totalCost: 0,
      supplierName: 'Internal Production',
      bottleType: bottleType || 'New',
      type: 'OUT',
      description: `Used for ${qty} bottles of ${sizeCategory} juice`
    });

    const capAudit = await BottleInventory.create({
      companyId: req.user.companyId,
      quantity: qty,
      costPerUnit: 0,
      totalCost: 0,
      supplierName: 'Internal Production',
      bottleType: 'Caps',
      type: 'OUT',
      description: `Caps used for ${qty} bottles of production`
    });

    // 3. CREATE PRODUCTION RECORD (With hard links)
    const production = await Production.create({
      juiceType,
      companyId: req.user.companyId,
      quantityProduced: qty,
      nameOfVerk: nameOfVerk || 'Internal',
      footValue: footValue || '',
      bottleType: bottleType || 'New',
      sizeCategory: sizeCategory || '500ml',
      costValue: Number(costValue) || 0,
      openingBalance: Number(openingBalance) || 0,
      date: date || Date.now(),
      isActive: true,
      bottleAuditId: bottleAudit._id,
      capAuditId: capAudit._id, // NEW LINK
      createdBy: req.user._id
    });

    // 4. Update Juice Stock
    const product = await Product.findOne({ _id: juiceType, companyId: req.user.companyId });
    if (product) {
      product.currentStock += qty;
      await product.save();
    }

    res.status(201).json(production);

  } catch (error) {
    console.error('--- PRODUCTION ERROR ---', error);
    res.status(400).json({ message: error.message });
  }
};

const getProductions = async (req, res) => {
  try {
    const { month, year } = req.query;
    const query = { companyId: req.user.companyId };

    if (month && year) {
      const m = parseInt(month);
      const y = parseInt(year);
      const startDate = new Date(Date.UTC(y, m - 1, 1, 0, 0, 0, 0));
      const endDate = new Date(Date.UTC(y, m, 0, 23, 59, 59, 999));
      query.date = { $gte: startDate, $lte: endDate };
    }

    const productions = await Production.find(query).populate('juiceType').sort({ date: 1 });
    res.json(productions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduction = async (req, res) => {
  try {
    const production = await Production.findOneAndUpdate(
        { _id: req.params.id, companyId: req.user.companyId }, 
        req.body, 
        { new: true }
    );
    res.json(production);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProduction = async (req, res) => {
  try {
    const prod = await Production.findOne({ _id: req.params.id, companyId: req.user.companyId });
    if (prod) {
        // ALWAYS use the hard link to delete the exact bottle transaction
        if (prod.bottleAuditId) {
            await BottleInventory.deleteOne({ _id: prod.bottleAuditId });
            console.log('Linked bottle transaction deleted.');
        }

        if (prod.capAuditId) {
            await BottleInventory.deleteOne({ _id: prod.capAuditId });
            console.log('Linked cap transaction deleted.');
        } else {
            // Fallback for old records without hard link (regex)
            await BottleInventory.deleteOne({ 
                companyId: req.user.companyId, 
                quantity: prod.quantityProduced, 
                type: 'OUT',
                description: { $regex: new RegExp(prod.sizeCategory) }
            });
        }
        
        // Decrease juice stock
        const product = await Product.findOne({ _id: prod.juiceType, companyId: req.user.companyId });
        if (product) {
            product.currentStock -= prod.quantityProduced;
            await product.save();
        }

        await prod.deleteOne();
        res.json({ message: 'Production deleted and bottles restored' });
    } else {
        res.status(404).json({ message: 'Not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const adjustActiveProduction = async (req, res) => {
    try {
        const { amount, type } = req.body;
        const production = await Production.findOne({ _id: req.params.id, companyId: req.user.companyId });
        if (!production) return res.status(404).json({ message: 'Production not found' });

        const adj = Number(amount);
        if (type === 'add') {
            const records = await BottleInventory.find({ companyId: req.user.companyId });
            const totalPurchased = records.filter(r => r.type === 'IN').reduce((acc, r) => acc + r.quantity, 0);
            const totalUsed = records.filter(r => r.type === 'OUT').reduce((acc, r) => acc + r.quantity, 0);
            const avail = totalPurchased - totalUsed;
            
            if (adj > avail) return res.status(400).json({ message: 'Insufficient bottles' });

            production.quantityProduced += adj;
            await BottleInventory.create({
                companyId: req.user.companyId,
                quantity: adj,
                costPerUnit: 0,
                totalCost: 0,
                supplierName: 'Internal Adjustment',
                type: 'OUT',
                description: `Adjustment: +${adj} bottles`
            });
        } else {
            production.quantityProduced -= adj;
            await BottleInventory.create({
                companyId: req.user.companyId,
                quantity: adj,
                costPerUnit: 0,
                totalCost: 0,
                supplierName: 'Internal Adjustment',
                type: 'IN',
                description: `Adjustment: -${adj} bottles`
            });
        }
        await production.save();

        const product = await Product.findOne({ _id: production.juiceType, companyId: req.user.companyId });
        if (product) {
            if (type === 'add') product.currentStock += adj;
            else product.currentStock -= adj;
            await product.save();
        }

        res.json(production);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
  createProduction,
  getProductions,
  updateProduction,
  deleteProduction,
  adjustActiveProduction
};
