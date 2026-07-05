const Party = require('../models/Party');
const Transaction = require('../models/Transaction');

exports.getParties = async (req, res) => {
  try {
    const parties = await Party.find().sort({ name: 1 }).lean();
    const transactions = await Transaction.aggregate([
      { $group: { _id: "$partyId", lastTransactionDate: { $max: "$date" } } }
    ]);
    const txMap = {};
    transactions.forEach(t => { if (t._id) txMap[t._id.toString()] = t.lastTransactionDate; });
    const enrichedParties = parties.map(p => ({ ...p, lastTransactionDate: txMap[p._id.toString()] || null }));
    res.json(enrichedParties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const CashLog = require('../models/CashLog');
const BankLog = require('../models/BankLog');

exports.addParty = async (req, res) => {
  try {
    let initialBalance = Number(req.body.openingBalance || 0);
    if ((req.body.type === 'supplier' || req.body.type === 'bottle_supplier') && !req.body.openingBalanceType) {
      // For a supplier, opening balance usually means "Payable" (we owe them), so it should be negative
      initialBalance = -Math.abs(initialBalance);
    }
    const partyData = { ...req.body, balance: initialBalance };
    const party = new Party(partyData);
    await party.save();

    if (partyData.balance !== 0) {
      const isReceivable = partyData.balance > 0;
      const transaction = new Transaction({
        partyId: party._id,
        amount: Math.abs(partyData.balance),
        type: isReceivable ? 'credit' : 'debit', // Credit = they owe us (adds to balance), Debit = we owe them
        description: 'Opening Balance',
        date: new Date()
      });
      await transaction.save();
    }

    res.status(201).json(party);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateParty = async (req, res) => {
  try {
    const party = await Party.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(party);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteParty = async (req, res) => {
  try {
    await Party.findByIdAndDelete(req.params.id);
    await Transaction.deleteMany({ partyId: req.params.id });
    res.json({ message: 'Party deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ partyId: req.params.partyId })
      .populate('purchaseId', 'billImage')
      .sort({ date: -1 });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addTransaction = async (req, res) => {
  try {
    const { partyId, amount, type, description, date, paymentMode } = req.body;
    const transaction = new Transaction({ partyId, amount, type, description, date, paymentMode });
    await transaction.save();

    // Update party balance
    // Simple logic: Credit increases balance, Debit decreases balance
    const updateAmount = type === 'credit' ? amount : -amount;
    const party = await Party.findByIdAndUpdate(partyId, { $inc: { balance: updateAmount } }, { new: true });

    // Fetch party to know if it's customer or supplier
    const currentParty = await Party.findById(partyId);
    
    // Handle CashLog / BankLog if paymentMode is provided
    let shouldLog = false;
    let logType = '';
    let category = 'Other';

    if (currentParty) {
      if (currentParty.type === 'customer' && type === 'debit') {
        shouldLog = true;
        logType = 'IN';
        category = 'Sale';
      } else if ((currentParty.type === 'supplier' || currentParty.type === 'bottle_supplier') && type === 'credit') {
        shouldLog = true;
        logType = 'OUT';
        category = 'Purchase';
      }
    }

    const companyId = req.user ? req.user.companyId : (currentParty ? currentParty.companyId : 'default');
    
    if (paymentMode && shouldLog) {
      const desc = description ? `${description} (Party: ${currentParty.name})` : `Payment ${logType === 'IN' ? 'from' : 'to'} ${currentParty.name}`;
      
      const createCash = async (amt) => {
        if (Number(amt) > 0) {
          const cashLog = new CashLog({
            companyId, type: logType, amount: Number(amt), category, source: 'Party Payment',
            description: desc, date: date || new Date(), createdBy: req.user ? req.user._id : null
          });
          await cashLog.save();
        }
      };

      const createBank = async (amt, mode) => {
        if (Number(amt) > 0) {
          const bankLog = new BankLog({
            companyId, type: logType, amount: Number(amt), category, source: 'Party Payment', paymentMode: mode,
            description: desc, date: date || new Date(), createdBy: req.user ? req.user._id : null
          });
          await bankLog.save();
        }
      };

      if (paymentMode === 'Split') {
        await createCash(req.body.paidCash);
        await createBank(req.body.paidBank, 'UPI'); // Defaulting to UPI for the bank portion of Split
      } else if (paymentMode === 'Cash') {
        await createCash(amount);
      } else {
        await createBank(amount, paymentMode);
      }
    }

    res.status(201).json(transaction);
  } catch (error) {
    console.error('400 ERROR:', error); res.status(400).json({ message: error.message });
  }
};

exports.deleteParty = async (req, res) => {
  try {
      await Party.findByIdAndDelete(req.params.id);
      await Transaction.deleteMany({ partyId: req.params.id });
      res.json({ message: 'Party deleted' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

exports.updateTransaction = async (req, res) => {
    try {
        const oldTx = await Transaction.findById(req.params.txId);
        if (!oldTx) return res.status(404).json({ message: 'Transaction not found' });
        
        // Reverse old balance
        const revertAmount = oldTx.type === 'credit' ? -oldTx.amount : oldTx.amount;
        await Party.findByIdAndUpdate(oldTx.partyId, { $inc: { balance: revertAmount } });

        const updatedTx = await Transaction.findByIdAndUpdate(req.params.txId, req.body, { new: true });
        
        // Apply new balance
        const newAmount = updatedTx.type === 'credit' ? updatedTx.amount : -updatedTx.amount;
        await Party.findByIdAndUpdate(updatedTx.partyId, { $inc: { balance: newAmount } });

        res.json(updatedTx);
    } catch (error) {
        console.error('400 ERROR:', error); res.status(400).json({ message: error.message });
    }
};

exports.deleteTransaction = async (req, res) => {
    try {
        const tx = await Transaction.findByIdAndDelete(req.params.txId);
        if (!tx) return res.status(404).json({ message: 'Transaction not found' });
        
        // Reverse balance
        const revertAmount = tx.type === 'credit' ? -tx.amount : tx.amount;
        await Party.findByIdAndUpdate(tx.partyId, { $inc: { balance: revertAmount } });

        res.json({ message: 'Transaction deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Recalculate all party balances from scratch based on their transactions
exports.recalculateBalances = async (req, res) => {
    try {
        const parties = await Party.find();
        for (const party of parties) {
            const txns = await Transaction.find({ partyId: party._id });
            const balance = txns.reduce((acc, tx) => {
                return acc + (tx.type === 'credit' ? tx.amount : -tx.amount);
            }, 0);
            await Party.findByIdAndUpdate(party._id, { balance });
        }
        res.json({ message: 'All balances recalculated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
