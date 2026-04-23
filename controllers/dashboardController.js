const Product = require('../models/Product');
const Order = require('../models/Order');
const BottleInventory = require('../models/BottleInventory');
const Production = require('../models/Production');

const getDashboardStats = async (req, res) => {
  try {
    const companyId = req.user.companyId;

    const stats = await Promise.all([
      // Bottle Stats
      BottleInventory.aggregate([
        { $match: { companyId } },
        {
          $group: {
            _id: null,
            totalIn: { $sum: { $cond: [{ $eq: ["$type", "IN"] }, "$quantity", 0] } },
            totalOut: { $sum: { $cond: [{ $eq: ["$type", "OUT"] }, "$quantity", 0] } },
            totalCost: { $sum: { $cond: [{ $eq: ["$type", "IN"] }, "$totalCost", 0] } }
          }
        }
      ]),
      // Sales Stats
      Order.aggregate([
        { $match: { companyId } },
        {
          $group: {
            _id: null,
            totalSales: { $sum: "$totalAmount" },
            paidAmount: { $sum: "$paidAmount" }
          }
        }
      ]),
      // Product Stats (Low Stock)
      Product.find({ companyId })
    ]);

    const bottleStats = stats[0][0] || { totalIn: 0, totalOut: 0, totalCost: 0 };
    const salesStats = stats[1][0] || { totalSales: 0, paidAmount: 0 };
    const products = stats[2];

    const availableEmptyStock = bottleStats.totalIn - bottleStats.totalOut;
    const totalFilledStock = products.reduce((acc, p) => acc + p.currentStock, 0);
    const averageBottleCost = bottleStats.totalIn > 0 ? bottleStats.totalCost / bottleStats.totalIn : 0;
    const profit = salesStats.totalSales - (bottleStats.totalOut * averageBottleCost);

    res.json({
      totalBottlesPurchased: bottleStats.totalIn,
      availableEmptyStock,
      totalFilledStock,
      totalSales: salesStats.totalSales,
      pendingPayments: salesStats.totalSales - salesStats.paidAmount,
      profit: parseFloat(profit.toFixed(2)),
      lowStockProducts: products.filter(p => p.currentStock <= p.lowStockThreshold).map(p => ({
        _id: p._id,
        name: p.name,
        currentStock: p.currentStock
      }))
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSalesChartData = async (req, res) => {
  try {
    const chartData = await Order.aggregate([
      { $match: { companyId: req.user.companyId } },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          sales: { $sum: "$totalAmount" }
        }
      },
      { $sort: { _id: 1 } },
      {
        $project: {
          _id: 0,
          date: "$_id",
          sales: 1
        }
      }
    ]);

    res.json(chartData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDailyReport = async (req, res) => {
    try {
        const { date } = req.query; // YYYY-MM-DD
        if (!date) return res.status(400).json({ message: 'Date is required' });
        
        const [y, m, d] = date.split('-').map(Number);
        const startOfDay = new Date(y, m - 1, d, 0, 0, 0, 0);
        const endOfDay = new Date(y, m - 1, d, 23, 59, 59, 999);

        const dateRange = { $gte: startOfDay, $lte: endOfDay };

        const [productions, orders, bottles] = await Promise.all([
            Production.find({ date: dateRange, companyId: req.user.companyId }).populate('juiceType'),
            Order.find({ createdAt: dateRange, companyId: req.user.companyId }).populate('items.juiceType'),
            BottleInventory.find({ date: dateRange, companyId: req.user.companyId })
        ]);

        res.json({
            productions,
            orders,
            bottles,
            summary: {
                totalProduced: productions.reduce((acc, p) => acc + p.quantityProduced, 0),
                totalSales: orders.reduce((acc, o) => acc + o.totalAmount, 0),
                bottlesIn: bottles.filter(b => b.type === 'IN').reduce((acc, b) => acc + b.quantity, 0),
                bottlesOut: bottles.filter(b => b.type === 'OUT').reduce((acc, b) => acc + b.quantity, 0)
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getDashboardStats, getSalesChartData, getDailyReport };
