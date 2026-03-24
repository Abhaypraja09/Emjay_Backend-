const Product = require('../models/Product');
const Order = require('../models/Order');
const BottleInventory = require('../models/BottleInventory');
const Production = require('../models/Production');

const getDashboardStats = async (req, res) => {
  try {
    // FETCH ALL DATA IN PARALLEL (FASTEST)
    const [products, orders, bottleRecords] = await Promise.all([
      Product.find({}),
      Order.find({}),
      BottleInventory.find({})
    ]);

    const totalBottlesPurchased = bottleRecords.filter(r => r.type === 'IN').reduce((acc, r) => acc + r.quantity, 0);
    const totalBottlesUsed = bottleRecords.filter(r => r.type === 'OUT').reduce((acc, r) => acc + r.quantity, 0);
    const availableEmptyStock = totalBottlesPurchased - totalBottlesUsed;

    const totalFilledStock = products.reduce((acc, p) => acc + p.currentStock, 0);
    const totalSales = orders.reduce((acc, o) => acc + o.totalAmount, 0);
    const pendingPayments = orders.reduce((acc, o) => acc + (o.totalAmount - o.paidAmount), 0);

    const totalBottleCost = bottleRecords.filter(r => r.type === 'IN').reduce((acc, r) => acc + r.totalCost, 0);
    const averageBottleCost = totalBottlesPurchased > 0 ? totalBottleCost / totalBottlesPurchased : 0;
    const profit = totalSales - (totalBottlesUsed * averageBottleCost);

    res.json({
      totalBottlesPurchased,
      availableEmptyStock,
      totalFilledStock,
      totalSales,
      pendingPayments,
      profit: parseFloat(profit.toFixed(2)),
      lowStockProducts: products.filter(p => p.currentStock <= p.lowStockThreshold)
    });
  } catch (error) {
    console.error(`Dashboard stats error: ${error.message}`);
    res.status(500).json({ message: 'Error fetching dashboard stats' });
  }
};

const getSalesChartData = async (req, res) => {
  try {
    const orders = await Order.find({}).sort({ createdAt: 1 });
    const data = orders.reduce((acc, o) => {
      const date = o.createdAt.toISOString().split('T')[0];
      if (!acc[date]) {
        acc[date] = 0;
      }
      acc[date] += o.totalAmount;
      return acc;
    }, {});

    const chartData = Object.keys(data).map(date => ({
      date,
      sales: data[date]
    }));

    res.json(chartData);
  } catch (error) {
    console.error(`Sales chart error: ${error.message}`);
    res.status(500).json({ message: 'Error fetching sales chart data' });
  }
};

module.exports = { getDashboardStats, getSalesChartData };
