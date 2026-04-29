const CashLog = require('../models/CashLog');

const getCashLogs = async (req, res) => {
  try {
    const { month, year } = req.query;
    let query = { companyId: req.user.companyId };

    if (month && year) {
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0);
        query.date = { $gte: startDate, $lte: endDate };
    }

    const logs = await CashLog.find(query).sort({ date: -1 });
    
    // Calculate stats
    const totalIn = logs.filter(l => l.type === 'IN').reduce((acc, l) => acc + l.amount, 0);
    const totalOut = logs.filter(l => l.type === 'OUT').reduce((acc, l) => acc + l.amount, 0);

    res.json({
        logs,
        stats: {
            totalIn,
            totalOut,
            balance: totalIn - totalOut
        }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addCashLog = async (req, res) => {
  try {
    const newLog = new CashLog({
      ...req.body,
      companyId: req.user.companyId
    });
    await newLog.save();
    res.status(201).json(newLog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCashLog = async (req, res) => {
  try {
    await CashLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Log deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCashLogs,
  addCashLog,
  deleteCashLog
};
