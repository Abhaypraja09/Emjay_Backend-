const Party = require('../models/Party');
const Transaction = require('../models/Transaction');

exports.getParties = async (req, res) => {
  try {
    const parties = await Party.find().sort({ name: 1 });
    res.json(parties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addParty = async (req, res) => {
  try {
    const party = new Party(req.body);
    await party.save();
    res.status(201).json(party);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateParty = async (req, res) => {
  try {
    const party = await Party.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!party) return res.status(404).json({ message: 'Party not found' });
    res.json(party);
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
    const { partyId, amount, type, description, date } = req.body;
    const transaction = new Transaction({ partyId, amount, type, description, date });
    await transaction.save();

    // Update party balance
    // Simple logic: Credit increases balance, Debit decreases balance
    const updateAmount = type === 'credit' ? amount : -amount;
    await Party.findByIdAndUpdate(partyId, { $inc: { balance: updateAmount } });

    res.status(201).json(transaction);
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
        res.status(400).json({ message: error.message });
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
