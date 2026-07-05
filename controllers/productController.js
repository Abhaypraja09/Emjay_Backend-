const Product = require('../models/Product');

const createProduct = async (req, res) => {
  try {
    const { name, description, pricePerUnit, lowStockThreshold } = req.body;
    // SaaS fix: product name only needs to be unique WITHIN the company
    const productExists = await Product.findOne({ name, companyId: req.user.companyId });
    if (productExists) {
      return res.status(400).json({ message: 'Product already exists in your inventory' });
    }
    const product = await Product.create({ 
        name, 
        description, 
        pricePerUnit, 
        lowStockThreshold,
        companyId: req.user.companyId 
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({ companyId: req.user.companyId }).lean();
    
    if (req.query.month !== undefined && req.query.year !== undefined) {
      const m = parseInt(req.query.month);
      const y = parseInt(req.query.year);
      
      let endDate;
      if (m === 0) {
        endDate = new Date(Date.UTC(y + 1, 2, 31, 23, 59, 59, 999));
      } else {
        const actualYear = m <= 3 ? y + 1 : y;
        endDate = new Date(Date.UTC(actualYear, m, 0, 23, 59, 59, 999));
      }

      const Production = require('../models/Production');
      const Order = require('../models/Order');
      const BranchTransfer = require('../models/BranchTransfer');
      
      const productions = await Production.find({ companyId: req.user.companyId, isActive: true, date: { $gt: endDate } });
      const orders = await Order.find({ companyId: req.user.companyId, $or: [ { date: { $gt: endDate } }, { createdAt: { $gt: endDate }, date: null } ] });
      const transfers = await BranchTransfer.find({ companyId: req.user.companyId, type: 'IN', date: { $gt: endDate } });

      for (let p of products) {
        let futureProd = 0;
        let futureSales = 0;
        let futureTransfers = 0;

        productions.filter(prod => prod.juiceType && prod.juiceType.toString() === p._id.toString()).forEach(prod => {
          futureProd += prod.quantityProduced;
        });

        orders.forEach(o => {
          const item = o.items.find(i => i.juiceType && i.juiceType.toString() === p._id.toString());
          if (item) {
            futureSales += item.quantity;
          }
        });

        transfers.filter(t => t.juiceType && t.juiceType.toString() === p._id.toString()).forEach(t => {
          futureTransfers += t.quantity;
        });

        p.currentStock = p.currentStock - futureProd + futureSales + futureTransfers;
      }
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id, companyId: req.user.companyId });
    if (product) {
      product.name = req.body.name || product.name;
      product.description = req.body.description || product.description;
      product.pricePerUnit = req.body.pricePerUnit || product.pricePerUnit;
      product.lowStockThreshold = req.body.lowStockThreshold || product.lowStockThreshold;
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id, companyId: req.user.companyId });
    if (product) {
      await Product.deleteOne({ _id: product._id });
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const syncStock = async (req, res) => {
  try {
    const products = await Product.find({ companyId: req.user.companyId });
    const Production = require('../models/Production');
    const Order = require('../models/Order');

    for (const product of products) {
      // Sum all production for this product
      const totalProduced = await Production.aggregate([
        { $match: { juiceType: product._id, companyId: req.user.companyId } },
        { $group: { _id: null, total: { $sum: "$quantityProduced" } } }
      ]);

      // Sum all sales for this product
      const totalSold = await Order.aggregate([
        { $match: { companyId: req.user.companyId, 'items.juiceType': product._id } },
        { $unwind: "$items" },
        { $match: { 'items.juiceType': product._id } },
        { $group: { _id: null, total: { $sum: "$items.quantity" } } }
      ]);

      const prodQty = totalProduced[0] ? totalProduced[0].total : 0;
      const soldQty = totalSold[0] ? totalSold[0].total : 0;

      product.currentStock = prodQty - soldQty;
      await product.save();
    }

    res.json({ message: 'Stock synchronized successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createProduct, getProducts, updateProduct, deleteProduct, syncStock };
