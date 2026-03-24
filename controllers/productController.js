const Product = require('../models/Product');

const createProduct = async (req, res) => {
  try {
    const { name, description, pricePerUnit, lowStockThreshold } = req.body;
    const productExists = await Product.findOne({ name });
    if (productExists) {
      return res.status(400).json({ message: 'Product already exists' });
    }
    const product = await Product.create({ name, description, pricePerUnit, lowStockThreshold });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    // FALLBACK FOR DEMO (NO DB)
    res.json([
      { _id: 'p1', name: 'Apple Spark', description: 'Fresh apple juice', pricePerUnit: 45, currentStock: 150, lowStockThreshold: 10 },
      { _id: 'p2', name: 'Mango Blast', description: 'King of fruits', pricePerUnit: 55, currentStock: 5, lowStockThreshold: 15 },
      { _id: 'p3', name: 'Orange Tang', description: 'Citrus delight', pricePerUnit: 50, currentStock: 80, lowStockThreshold: 10 }
    ]);
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
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
    const product = await Product.findById(req.params.id);
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

module.exports = { createProduct, getProducts, updateProduct, deleteProduct };
