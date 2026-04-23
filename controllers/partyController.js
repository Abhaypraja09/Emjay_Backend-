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

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ partyId: req.params.partyId }).sort({ date: -1 });
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
}
