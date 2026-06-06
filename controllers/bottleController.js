const BottleInventory = require('../models/BottleInventory');
const CashLog = require('../models/CashLog');

const addBottlePurchase = async (req, res) => {
  try {
    let { items, supplierName, date, paymentMode } = req.body;
    
    // When using multer/form-data, items might be sent as a JSON string
    if (typeof items === 'string') {
        items = JSON.parse(items);
    }

    const createdItems = [];
    let grandTotal = 0;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      // Find the corresponding file for this item (e.g., billImage_0, billImage_1)
      const file = req.files ? req.files.find(f => f.fieldname === `billImage_${i}`) : null;
      const billImage = file ? file.path : null;

      const purchase = await BottleInventory.create({
        companyId: req.user.companyId,
        quantity: Number(item.quantity),
        costPerUnit: Number(item.pricePerUnit),
        totalCost: Number(item.totalCost),
        supplierName,
        bottleType: item.bottleType || 'New',
        date: date || Date.now(),
        type: 'IN',
        billImage: billImage
      });
      createdItems.push(purchase);
      grandTotal += Number(item.totalCost);
    }

    // Record Cash Log as Expense
    if (grandTotal > 0 && paymentMode === 'Cash') {
        await CashLog.create({
            companyId: req.user.companyId,
            type: 'OUT',
            category: 'Purchase',
            amount: grandTotal,
            description: `Bottle/Cap Purchase from ${supplierName}`,
            paymentMode: 'Cash',
            date: date || Date.now()
        });
    }

    res.status(201).json({ message: 'Purchases recorded successfully', items: createdItems });
  } catch (error) {
    console.error('Error in addBottlePurchase:', error);
    res.status(500).json({ message: error.message, stack: error.stack });
  }
};

const getBottleStock = async (req, res) => {
  try {
    const { month, year } = req.query;
    
    // 1. Get ALL records to calculate cumulative stock (Available Empty Bottles & Caps)
    const allRecords = await BottleInventory.find({ companyId: req.user.companyId }).sort({ date: 1 });

    // Cumulative Calculations (Total of all time)
    const allBottles = allRecords.filter(r => r.bottleType !== 'Caps');
    const totalBottlesIn = allBottles.filter(r => r.type === 'IN').reduce((acc, r) => acc + r.quantity, 0);
    const totalBottlesOut = allBottles.filter(r => r.type === 'OUT').reduce((acc, r) => acc + r.quantity, 0);
    const availableEmptyBottles = totalBottlesIn - totalBottlesOut;

    const allCaps = allRecords.filter(r => r.bottleType === 'Caps');
    const totalCapsIn = allCaps.filter(r => r.type === 'IN').reduce((acc, r) => acc + r.quantity, 0);
    const totalCapsOut = allCaps.filter(r => r.type === 'OUT').reduce((acc, r) => acc + r.quantity, 0);
    const availableCaps = totalCapsIn - totalCapsOut;

    // 2. Filter records for the specific month for history display
    let history = allRecords;
    if (month && year) {
      const m = parseInt(month);
      const y = parseInt(year);
      const startDate = new Date(Date.UTC(y, m - 1, 1, 0, 0, 0, 0));
      const endDate = new Date(Date.UTC(y, m, 0, 23, 59, 59, 999));
      history = allRecords.filter(r => new Date(r.date) >= startDate && new Date(r.date) <= endDate);
    }

    // Month-specific stats (optional but helpful for some UI parts)
    const monthPurchased = history.filter(r => r.type === 'IN' && r.bottleType !== 'Caps').reduce((acc, r) => acc + r.quantity, 0);
    const monthUsed = history.filter(r => r.type === 'OUT' && r.bottleType !== 'Caps').reduce((acc, r) => acc + r.quantity, 0);

    res.json({
      totalPurchased: monthPurchased, // This month's buy (for the card)
      totalUsed: monthUsed,           // This month's production
      availableEmptyBottles,          // CURRENT TOTAL stock
      availableCaps,                  // CURRENT TOTAL stock
      totalCapsPurchased: totalCapsIn,
      totalCapsUsed: totalCapsOut,
      history: history.reverse()      // Show recent first in history
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
