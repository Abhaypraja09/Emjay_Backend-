const BranchStock = require('../models/BranchStock');
const BranchTransfer = require('../models/BranchTransfer');
const Product = require('../models/Product');
const Party = require('../models/Party');
const Order = require('../models/Order');

const getBranchStocks = async (req, res) => {
  try {
    const { month, year } = req.query;
    
    // Filter transfers by month/year
    const query = { companyId: req.user.companyId };
    let startDate, endDate;
    if (month !== undefined && year !== undefined) {
      const m = parseInt(month);
      const y = parseInt(year);
      if (m === 0) {
        startDate = new Date(y, 3, 1);
        endDate = new Date(y + 1, 2, 31, 23, 59, 59, 999);
      } else {
        const actualYear = m <= 3 ? y + 1 : y;
        startDate = new Date(actualYear, m - 1, 1);
        endDate = new Date(actualYear, m, 0, 23, 59, 59, 999);
      }
      query.date = { $gte: startDate, $lte: endDate };
    } else {
      endDate = new Date(); // If no date provided, use current date
    }
      
    // Fetch filtered transfers for recent transactions
    const transfers = await BranchTransfer.find(query)
      .populate('partyId', 'name')
      .populate('juiceType', 'name')
      .sort({ date: -1 });

    // Calculate Stock as of endDate using Aggregation
    const stockAgg = await BranchTransfer.aggregate([
      { 
        $match: { 
          companyId: req.user.companyId,
          date: { $lte: endDate }
        }
      },
      {
        $group: {
          _id: { partyId: "$partyId", juiceType: "$juiceType" },
          totalIn: { $sum: { $cond: [{ $eq: ["$type", "IN"] }, "$quantity", 0] } },
          totalOut: { $sum: { $cond: [{ $eq: ["$type", "OUT"] }, "$quantity", 0] } }
        }
      },
      {
        $project: {
          partyId: "$_id.partyId",
          juiceType: "$_id.juiceType",
          quantity: { $subtract: ["$totalIn", "$totalOut"] }
        }
      }
    ]);

    const stocks = stockAgg.map(s => ({
      partyId: { _id: s.partyId ? s.partyId.toString() : null },
      juiceType: { _id: s.juiceType ? s.juiceType.toString() : null },
      quantity: s.quantity
    }));
      
    res.json({ stocks, transfers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Transfer IN (Send to Wholesaler/Branch)
const transferIn = async (req, res) => {
  try {
    const { partyId, juiceType, quantity, rate, date, description } = req.body;
    
    // Deduct from Main Production Stock
    const product = await Product.findOne({ _id: juiceType, companyId: req.user.companyId });
    if (!product || product.currentStock < quantity) {
      return res.status(400).json({ message: `Insufficient stock in Main Production. Available: ${product ? product.currentStock : 0}` });
    }
    
    await Product.findByIdAndUpdate(juiceType, { $inc: { currentStock: -quantity } });
    
    // Add to Branch Stock
    await BranchStock.findOneAndUpdate(
      { companyId: req.user.companyId, partyId, juiceType },
      { $inc: { quantity: quantity } },
      { upsert: true, new: true }
    );
    
    // Create Transfer Log
    const transfer = new BranchTransfer({
      companyId: req.user.companyId,
      partyId,
      type: 'IN',
      juiceType,
      quantity,
      rate,
      date: date || new Date(),
      description,
      createdBy: req.user._id
    });
    await transfer.save();
    
    res.status(201).json({ message: 'Stock transferred successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Transfer OUT (Wholesaler Sold it) -> Deducts branch stock, creates Order/Bill
const transferOut = async (req, res) => {
  try {
    const { partyId, juiceType, quantity, rate, date, description } = req.body;
    
    // Check Branch Stock
    const stock = await BranchStock.findOne({ companyId: req.user.companyId, partyId, juiceType });
    if (!stock || stock.quantity < quantity) {
      return res.status(400).json({ message: `Insufficient stock at this Branch. Available: ${stock ? stock.quantity : 0}` });
    }
    
    // Deduct from Branch Stock
    await BranchStock.findByIdAndUpdate(stock._id, { $inc: { quantity: -quantity } });
    
    // Create Transfer Log
    const transfer = new BranchTransfer({
      companyId: req.user.companyId,
      partyId,
      type: 'OUT',
      juiceType,
      quantity,
      rate,
      date: date || new Date(),
      description,
      createdBy: req.user._id
    });
    await transfer.save();
    
    // Create a Bill/Order so it hits the Party Ledger
    const party = await Party.findById(partyId);
    
    const order = new Order({
      companyId: req.user.companyId,
      customerName: party.name,
      type: 'B2B',
      items: [{
        juiceType,
        quantity,
        price: rate
      }],
      totalAmount: quantity * rate,
      grandTotal: quantity * rate,
      paidAmount: 0,
      paymentMode: 'Due', // Hits ledger
      paymentStatus: 'unpaid',
      date: date || new Date(),
      createdBy: req.user._id
    });
    await order.save();
    
    res.status(201).json({ message: 'Sale recorded and billed successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getBranchStocks,
  transferIn,
  transferOut
};
