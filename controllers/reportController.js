const Production = require('../models/Production');
const Order = require('../models/Order');
const BottleInventory = require('../models/BottleInventory');
const Product = require('../models/Product');

/**
 * Production Stock Report
 * Date / Opening Stock / Production / (-Sales) / Closing
 */
const getProductionStockReport = async (req, res) => {
  try {
    const { productId, startDate, endDate } = req.query;
    if (!productId) {
      return res.status(400).json({ message: 'Product ID is required for stock report' });
    }

    // 1. Get all events (Production and Sales) for this product
    // We fetch everything to calculate the running balance accurately from zero
    const productions = await Production.find({ 
      companyId: req.user.companyId, 
      juiceType: productId,
      isActive: true 
    }).sort({ date: 1 });

    const orders = await Order.find({ 
      companyId: req.user.companyId, 
      'items.juiceType': productId 
    }).sort({ date: 1 });

    // 2. Aggregate by day
    const dailyData = {};

    productions.forEach(p => {
      const day = new Date(p.date).toISOString().split('T')[0];
      if (!dailyData[day]) dailyData[day] = { production: 0, sales: 0 };
      dailyData[day].production += p.quantityProduced;
    });

    orders.forEach(o => {
      const day = new Date(o.date || o.createdAt).toISOString().split('T')[0];
      if (!dailyData[day]) dailyData[day] = { production: 0, sales: 0 };
      
      const item = o.items.find(i => i.juiceType.toString() === productId);
      if (item) {
        dailyData[day].sales += item.quantity;
      }
    });

    // 3. Calculate running balances
    const sortedDays = Object.keys(dailyData).sort();
    let runningBalance = 0;
    const report = [];

    sortedDays.forEach(day => {
      const opening = runningBalance;
      const prod = dailyData[day].production;
      const sale = dailyData[day].sales;
      const closing = opening + prod - sale;

      report.push({
        date: day,
        openingStock: opening,
        production: prod,
        sales: sale,
        closingStock: closing
      });

      runningBalance = closing;
    });

    // 4. Filter by requested date range
    let filteredReport = report;
    let sDate = startDate;
    let eDate = endDate;

    if (req.query.month && req.query.year) {
      const m = parseInt(req.query.month);
      const y = parseInt(req.query.year);
      sDate = new Date(Date.UTC(y, m - 1, 1)).toISOString().split('T')[0];
      eDate = new Date(Date.UTC(y, m, 0)).toISOString().split('T')[0];
    }

    if (sDate) {
      filteredReport = filteredReport.filter(r => r.date >= sDate);
    }
    if (eDate) {
      filteredReport = filteredReport.filter(r => r.date <= eDate);
    }

    filteredReport.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    res.json(filteredReport);
  } catch (error) {
    console.error('Production Stock Report Error:', error);
    res.status(500).json({ message: error.message });
  }
};

/**
 * Bottle Stock Report
 * Date / Opening Stock / Buy / Used / Closing
 */
const getBottleStockReport = async (req, res) => {
  try {
    const { bottleType, startDate, endDate } = req.query; // bottleType: 'New' or 'Old'
    
    const query = { companyId: req.user.companyId };
    if (bottleType === 'Bottles') {
        query.bottleType = { $in: ['New', 'Old'] };
    } else if (bottleType) {
        query.bottleType = bottleType;
    }

    const records = await BottleInventory.find(query).sort({ date: 1 });

    const dailyData = {};

    records.forEach(r => {
      const day = new Date(r.date).toISOString().split('T')[0];
      if (!dailyData[day]) dailyData[day] = { buy: 0, used: 0 };
      
      if (r.type === 'IN') {
        dailyData[day].buy += r.quantity;
      } else if (r.type === 'OUT') {
        dailyData[day].used += r.quantity;
      }
    });

    const sortedDays = Object.keys(dailyData).sort();
    let runningBalance = 0;
    const report = [];

    sortedDays.forEach(day => {
      const opening = runningBalance;
      const buy = dailyData[day].buy;
      const used = dailyData[day].used;
      const closing = opening + buy - used;

      report.push({
        date: day,
        openingStock: opening,
        buy,
        used,
        closingStock: closing
      });

      runningBalance = closing;
    });

    let filteredReport = report;
    let sDate = startDate;
    let eDate = endDate;

    if (req.query.month && req.query.year) {
      const m = parseInt(req.query.month);
      const y = parseInt(req.query.year);
      sDate = new Date(Date.UTC(y, m - 1, 1)).toISOString().split('T')[0];
      eDate = new Date(Date.UTC(y, m, 0)).toISOString().split('T')[0];
    }

    if (sDate) {
      filteredReport = filteredReport.filter(r => r.date >= sDate);
    }
    if (eDate) {
      filteredReport = filteredReport.filter(r => r.date <= eDate);
    }

    filteredReport.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    res.json(filteredReport);
  } catch (error) {
    console.error('Bottle Stock Report Error:', error);
    res.status(500).json({ message: error.message });
  }
};

/**
 * Global Stock Report (All Products Combined)
 */
const getGlobalStockReport = async (req, res) => {
  try {
    const { month, year } = req.query;

    const productions = await Production.find({ 
      companyId: req.user.companyId, 
      isActive: true 
    }).sort({ date: 1 });

    const orders = await Order.find({ 
      companyId: req.user.companyId 
    }).sort({ date: 1 });

    const dailyData = {};

    productions.forEach(p => {
      const day = new Date(p.date).toISOString().split('T')[0];
      if (!dailyData[day]) dailyData[day] = { production: 0, sales: 0 };
      dailyData[day].production += p.quantityProduced;
    });

    orders.forEach(o => {
      const day = new Date(o.date || o.createdAt).toISOString().split('T')[0];
      if (!dailyData[day]) dailyData[day] = { production: 0, sales: 0 };
      
      const totalQty = o.items.reduce((acc, item) => acc + item.quantity, 0);
      dailyData[day].sales += totalQty;
    });

    const sortedDays = Object.keys(dailyData).sort();
    let runningBalance = 0;
    const report = [];

    sortedDays.forEach(day => {
      const opening = runningBalance;
      const prod = dailyData[day].production;
      const sale = dailyData[day].sales;
      const closing = opening + prod - sale;

      report.push({
        date: day,
        openingStock: opening,
        production: prod,
        sales: sale,
        closingStock: closing
      });

      runningBalance = closing;
    });

    let filteredReport = report;
    if (month && year) {
      const sDate = new Date(Date.UTC(year, month - 1, 1)).toISOString().split('T')[0];
      const eDate = new Date(Date.UTC(year, month, 0)).toISOString().split('T')[0];
      filteredReport = filteredReport.filter(r => r.date >= sDate && r.date <= eDate);
    }

    res.json(filteredReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProductionStockReport,
  getBottleStockReport,
  getGlobalStockReport
};
