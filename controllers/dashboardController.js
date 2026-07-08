const Product = require('../models/Product');
const Order = require('../models/Order');
const BottleInventory = require('../models/BottleInventory');
const Production = require('../models/Production');
const BranchTransfer = require('../models/BranchTransfer');
const Purchase = require('../models/Purchase');

const getDashboardStats = async (req, res) => {
  try {
    const companyId = req.user.companyId;
    const { month, fy } = req.query;

    let dateFilter = {};
    if (fy && fy.includes('-')) {
      const [startYearStr, endYearStr] = fy.split('-');
      const startYear = parseInt(startYearStr);
      const endYear = parseInt(endYearStr);

      let startDate, endDate;

      if (month && month !== 'Full Year') {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthIndex = months.indexOf(month);
        
        if (monthIndex !== -1) {
          const targetYear = monthIndex >= 3 ? startYear : endYear; // Apr(3)-Dec(11) in startYear, Jan(0)-Mar(2) in endYear
          startDate = new Date(targetYear, monthIndex, 1, 0, 0, 0, 0);
          endDate = new Date(targetYear, monthIndex + 1, 0, 23, 59, 59, 999);
        }
      } else {
        startDate = new Date(startYear, 3, 1, 0, 0, 0, 0); // April 1st
        endDate = new Date(endYear, 2, 31, 23, 59, 59, 999); // March 31st
      }

      if (startDate && endDate) {
        dateFilter = { createdAt: { $gte: startDate, $lte: endDate } };
      }
    }

    const stats = await Promise.all([
      // Bottle Stats
      BottleInventory.aggregate([
        { $match: { companyId, ...dateFilter } },
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
        { $match: { companyId, ...dateFilter } },
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

        const [productions, orders, bottles, branchTransfers, purchases] = await Promise.all([
            Production.find({ date: dateRange, companyId: req.user.companyId }).sort({ createdAt: -1 }).populate('juiceType'),
            Order.find({ date: dateRange, companyId: req.user.companyId }).sort({ createdAt: -1 }).populate('items.juiceType'),
            BottleInventory.find({ date: dateRange, companyId: req.user.companyId }).sort({ createdAt: -1 }),
            BranchTransfer.find({ date: dateRange, companyId: req.user.companyId }).sort({ createdAt: -1 }).populate('partyId').populate('juiceType'),
            Purchase.find({ date: dateRange, companyId: req.user.companyId }).sort({ createdAt: -1 }).populate('partyId')
        ]);

        const productionBreakdown = productions.reduce((acc, p) => {
            const name = p.juiceType ? p.juiceType.name : 'Unknown';
            acc[name] = (acc[name] || 0) + p.quantityProduced;
            return acc;
        }, {});

        const salesBreakdown = orders.reduce((acc, o) => {
            o.items.forEach(item => {
                const name = item.juiceType ? item.juiceType.name : 'Unknown';
                acc[name] = (acc[name] || 0) + item.quantity;
            });
            return acc;
        }, {});

        res.json({
            productions,
            orders,
            bottles,
            branchTransfers,
            purchases,
            summary: {
                totalProduced: productions.reduce((acc, p) => acc + p.quantityProduced, 0),
                totalSales: orders.reduce((acc, o) => acc + o.totalAmount, 0),
                totalPurchases: purchases.reduce((acc, p) => acc + (p.totalCost || p.cost || 0), 0),
                totalBranchTransferBottles: branchTransfers.reduce((acc, b) => acc + (b.quantity || 0), 0),
                totalProductSoldQty: orders.reduce((acc, o) => acc + o.items.reduce((sum, item) => sum + item.quantity, 0), 0),
                bottlesIn: bottles.filter(b => b.type === 'IN').reduce((acc, b) => acc + b.quantity, 0),
                bottlesOut: bottles.filter(b => b.type === 'OUT').reduce((acc, b) => acc + b.quantity, 0),
                productionBreakdown,
                salesBreakdown
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getDashboardStats, getSalesChartData, getDailyReport };
