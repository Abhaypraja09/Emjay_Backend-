const BottleInventory = require('../models/BottleInventory');
const CashLog = require('../models/CashLog');

const isPastMonth = (dateString) => {
  if (!dateString) return false;
  const inputDate = new Date(dateString);
  const today = new Date();
  const inputYear = inputDate.getFullYear();
  const inputMonth = inputDate.getMonth();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  if (inputYear < currentYear) return true;
  if (inputYear === currentYear && inputMonth < currentMonth) return true;
  return false;
};

const addBottlePurchase = async (req, res) => {
  try {
    let { items, supplierName, date, status, paidCash, paidOnline } = req.body;

    if (isPastMonth(date)) {
      return res.status(400).json({ message: 'Cannot record transactions in a past month with closed stock.' });
    }
    
    // When using multer/form-data, items might be sent as a JSON string
    if (typeof items === 'string') {
        items = JSON.parse(items);
    }

    const createdItems = [];
    let grandTotal = 0;
    
    // Calculate grand total first to create a single transaction if partyId exists
    for (let i = 0; i < items.length; i++) {
      grandTotal += Number(items[i].quantity) * Number(items[i].pricePerUnit);
    }

    let transactionId = null;
    if (req.body.partyId && grandTotal > 0) {
      const Party = require('../models/Party');
      const Transaction = require('../models/Transaction');

      const party = await Party.findById(req.body.partyId);
      const vendorName = party ? party.name : supplierName || 'Bottle Vendor';
      const desc = `Bottle Purchase (${items.map(item => `${item.quantity} ${item.bottleType}`).join(', ')}) - ${vendorName}`;

      const tx = await Transaction.create({
        partyId: req.body.partyId,
        amount: grandTotal,
        type: 'debit', // we owe them money
        description: desc,
        date: date || Date.now()
      });
      transactionId = tx._id;

      // Update party balance
      await Party.findByIdAndUpdate(req.body.partyId, { $inc: { balance: -grandTotal } });
      
      // Credits (Payments) if paid
      if (status === 'Cash' || status === 'Paid') {
          await new Transaction({
              partyId: req.body.partyId,
              amount: grandTotal,
              type: 'credit',
              description: `Payment to ${vendorName}`,
              date: date || Date.now()
          }).save();
          await Party.findByIdAndUpdate(req.body.partyId, { $inc: { balance: grandTotal } });
      } else if (status === 'UPI') {
          await new Transaction({
              partyId: req.body.partyId,
              amount: grandTotal,
              type: 'credit',
              description: `Online Payment to ${vendorName}`,
              date: date || Date.now()
          }).save();
          await Party.findByIdAndUpdate(req.body.partyId, { $inc: { balance: grandTotal } });
      } else if (status === 'Split') {
          if (Number(paidCash) > 0) {
              await new Transaction({
                  partyId: req.body.partyId,
                  amount: Number(paidCash),
                  type: 'credit',
                  description: `Cash Payment to ${vendorName}`,
                  date: date || Date.now()
              }).save();
              await Party.findByIdAndUpdate(req.body.partyId, { $inc: { balance: Number(paidCash) } });
          }
          if (Number(paidOnline) > 0) {
              await new Transaction({
                  partyId: req.body.partyId,
                  amount: Number(paidOnline),
                  type: 'credit',
                  description: `Online Payment to ${vendorName}`,
                  date: date || Date.now()
              }).save();
              await Party.findByIdAndUpdate(req.body.partyId, { $inc: { balance: Number(paidOnline) } });
          }
      }
    }

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      // Find the corresponding file for this item (e.g., billImage_0, billImage_1)
      const file = req.files ? req.files.find(f => f.fieldname === `billImage_${i}`) : null;
      const billImage = file ? file.path : null;

      const purchase = await BottleInventory.create({
        companyId: req.user.companyId,
        quantity: Number(item.quantity),
        costPerUnit: Number(item.pricePerUnit),
        totalCost: Number(item.quantity) * Number(item.pricePerUnit),
        supplierName,
        partyId: req.body.partyId || null,
        transactionId: transactionId,
        bottleType: item.bottleType || 'New',
        date: date || Date.now(),
        type: 'IN',
        billImage: billImage
      });
      createdItems.push(purchase);
    }

    // Record Cash Log & Bank Log
    let actualCash = 0;
    let actualUpi = 0;

    if (status === 'Cash' || status === 'Paid') {
        actualCash = grandTotal;
    } else if (status === 'UPI') {
        actualUpi = grandTotal;
    } else if (status === 'Split') {
        actualCash = Number(paidCash) || 0;
        actualUpi = Number(paidOnline) || 0;
    }

    let finalSupplierName = supplierName || 'Vendor';
    if (req.body.partyId) {
        const Party = require('../models/Party');
        const party = await Party.findById(req.body.partyId);
        if (party) finalSupplierName = party.name;
    }

    if (actualCash > 0) {
        await CashLog.create({
            companyId: req.user.companyId,
            type: 'OUT',
            category: 'Purchase',
            amount: actualCash,
            description: `Bottle/Cap Purchase from ${finalSupplierName}`,
            paymentMode: 'Cash',
            date: date || Date.now()
        });
    }

    if (actualUpi > 0) {
        const BankLog = require('../models/BankLog');
        await BankLog.create({
            companyId: req.user.companyId,
            type: 'OUT',
            amount: actualUpi,
            category: 'Purchase',
            description: `Bottle/Cap Purchase from ${finalSupplierName}`,
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
    if (month !== undefined && year !== undefined) {
      const m = parseInt(month);
      const y = parseInt(year);
      let startDate, endDate;
      if (m === 0) {
        startDate = new Date(Date.UTC(y, 3, 1, 0, 0, 0, 0));
        endDate = new Date(Date.UTC(y + 1, 2, 31, 23, 59, 59, 999));
      } else {
        const actualYear = m <= 3 ? y + 1 : y;
        startDate = new Date(Date.UTC(actualYear, m - 1, 1, 0, 0, 0, 0));
        endDate = new Date(Date.UTC(actualYear, m, 0, 23, 59, 59, 999));
      }
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
      if (isPastMonth(purchase.date)) {
        return res.status(400).json({ message: 'Cannot delete transactions in a past month with closed stock.' });
      }

      if (purchase.transactionId && purchase.partyId) {
        const Party = require('../models/Party');
        const Transaction = require('../models/Transaction');
        
        // Revert balance (add back the debited amount)
        await Party.findByIdAndUpdate(purchase.partyId, { $inc: { balance: purchase.totalCost } });

        // Update transaction amount
        const tx = await Transaction.findById(purchase.transactionId);
        if (tx) {
            tx.amount -= purchase.totalCost;
            if (tx.amount <= 0) {
                await tx.deleteOne();
            } else {
                await tx.save();
            }
        }
      }

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
      if (isPastMonth(purchase.date) || (req.body.date && isPastMonth(req.body.date))) {
        return res.status(400).json({ message: 'Cannot update transactions in a past month with closed stock.' });
      }

      const Party = require('../models/Party');
      const Transaction = require('../models/Transaction');

      const oldPartyId = purchase.partyId;
      const oldTotalCost = purchase.totalCost;
      const newPartyId = req.body.partyId;
      const newQty = req.body.quantity !== undefined ? Number(req.body.quantity) : purchase.quantity;
      const newCostPerUnit = req.body.costPerUnit !== undefined ? Number(req.body.costPerUnit) : purchase.costPerUnit;
      const newTotalCost = newQty * newCostPerUnit;

      // Handle ledger update if linked to party
      if (oldPartyId || newPartyId) {
        // Case 1: Switched party or removed party
        if (oldPartyId && oldPartyId.toString() !== (newPartyId ? newPartyId.toString() : '')) {
            // Revert old party
            await Party.findByIdAndUpdate(oldPartyId, { $inc: { balance: oldTotalCost } });
            if (purchase.transactionId) {
                const tx = await Transaction.findById(purchase.transactionId);
                if (tx) {
                    tx.amount -= oldTotalCost;
                    if (tx.amount <= 0) await tx.deleteOne();
                    else await tx.save();
                }
            }
            purchase.transactionId = null;

            // If new party, create new transaction
            if (newPartyId) {
                const party = await Party.findById(newPartyId);
                const vendorName = party ? party.name : 'Vendor';
                const tx = await Transaction.create({
                    partyId: newPartyId,
                    amount: newTotalCost,
                    type: 'debit',
                    description: `Bottle Purchase (${newQty} ${purchase.bottleType}) - ${vendorName}`,
                    date: req.body.date || purchase.date
                });
                purchase.transactionId = tx._id;
                await Party.findByIdAndUpdate(newPartyId, { $inc: { balance: -newTotalCost } });
            }
        }
        // Case 2: Same party, but amount changed
        else if (oldPartyId && oldTotalCost !== newTotalCost) {
            const diff = newTotalCost - oldTotalCost;
            await Party.findByIdAndUpdate(oldPartyId, { $inc: { balance: -diff } });
            if (purchase.transactionId) {
                await Transaction.findByIdAndUpdate(purchase.transactionId, { 
                    $inc: { amount: diff },
                    date: req.body.date || purchase.date
                });
            }
        }
        // Case 3: No old party, but new party added
        else if (!oldPartyId && newPartyId) {
            const party = await Party.findById(newPartyId);
            const vendorName = party ? party.name : 'Vendor';
            const tx = await Transaction.create({
                partyId: newPartyId,
                amount: newTotalCost,
                type: 'debit',
                description: `Bottle Purchase (${newQty} ${purchase.bottleType}) - ${vendorName}`,
                date: req.body.date || purchase.date
            });
            purchase.transactionId = tx._id;
            await Party.findByIdAndUpdate(newPartyId, { $inc: { balance: -newTotalCost } });
        }
      }

      Object.assign(purchase, req.body);
      purchase.totalCost = newTotalCost;
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
