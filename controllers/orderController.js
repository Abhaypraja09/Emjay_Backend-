const Order = require('../models/Order');
const Product = require('../models/Product');
const Production = require('../models/Production');
const mongoose = require('mongoose');

const createOrder = async (req, res) => {
  try {
    for (const item of req.body.items) {
      const jtId = item.juiceType?._id || item.juiceType;
      const product = await Product.findOne({ _id: jtId, companyId: req.user.companyId });
      if (!product || product.currentStock < item.quantity) {
        return res.status(400).json({ message: `Insufficient stock for ${product?.name || 'Product'}. Available: ${product?.currentStock || 0}` });
      }
    }

    const order = new Order({ ...req.body, companyId: req.user.companyId, createdBy: req.user._id });
    const savedOrder = await order.save();
    for (const item of savedOrder.items) {
      const jtId = item.juiceType?._id || item.juiceType;
      await Product.findByIdAndUpdate(jtId, { $inc: { currentStock: -item.quantity } });
      const okd = new Date(savedOrder.date); okd.setHours(0, 0, 0, 0);
      await Production.findOneAndUpdate(
          { juiceType: jtId, companyId: req.user.companyId, date: { $gte: okd, $lt: new Date(okd.getTime() + 86400000) } }, 
          { 
              $inc: { salesDuringProduction: item.quantity },
              $setOnInsert: { quantityProduced: 0, date: okd } 
          }, 
          { upsert: true }
      );
    }
    res.status(201).json(savedOrder);
  } catch (error) { res.status(400).json({ message: error.message }); }
};

const getOrders = async (req, res) => {
  try {
    const { month, year } = req.query;
    const query = { companyId: req.user.companyId };
    
    if (month && year) {
      const startDate = new Date(parseInt(year), parseInt(month) - 1, 1);
      const endDate = new Date(parseInt(year), parseInt(month), 0, 23, 59, 59, 999);
      query.date = { $gte: startDate, $lte: endDate };
    }

    const orders = await Order.find(query).populate('items.juiceType').sort({ date: 1 });
    res.json(orders);
  } catch (error) { res.status(400).json({ message: error.message }); }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { customerName, shopName, type, items, totalAmount, paidAmount, date } = req.body;

    const oldOrder = await Order.findById(id);
    if (!oldOrder) return res.status(404).json({ message: 'Order not found' });

    // Inventory Validation (Pre-check)
    for (const it of items) {
       const jtId = it.juiceType?._id || it.juiceType;
       const product = await Product.findOne({ _id: jtId, companyId: req.user.companyId });
       const oldItem = oldOrder.items.find(oi => oi.juiceType.toString() === jtId.toString());
       const oldQty = oldItem ? oldItem.quantity : 0;
       
       // New Stock Needed = New Qty - Old Qty
       const diff = Number(it.quantity) - oldQty;
       if (product.currentStock < diff) {
         return res.status(400).json({ message: `Insufficient stock. Additional required: ${diff}, Available: ${product.currentStock}` });
       }
    }

    // Inventory Rollback
    for (const item of oldOrder.items) {
      const jtId = item.juiceType?._id || item.juiceType;
      await Product.findByIdAndUpdate(jtId, { $inc: { currentStock: item.quantity } });
      const okd = new Date(oldOrder.date); okd.setHours(0, 0, 0, 0);
      await Production.findOneAndUpdate({ juiceType: jtId, companyId: req.user.companyId, date: { $gte: okd, $lt: new Date(okd.getTime() + 86400000) } }, { $inc: { salesDuringProduction: -item.quantity } });
    }

    // DIRECT MONGODB UPDATE (Bypassing Mongoose complexity)
    const rawItems = items.map(it => ({
      juiceType: new mongoose.Types.ObjectId(it.juiceType?._id || it.juiceType),
      quantity: Number(it.quantity),
      price: Number(it.price)
    }));

    await mongoose.connection.db.collection('orders').updateOne(
        { _id: new mongoose.Types.ObjectId(id) },
        { 
          $set: {
            customerName,
            shopName,
            type,
            items: rawItems,
            totalAmount: Number(totalAmount),
            paidAmount: Number(paidAmount || 0),
            date: date ? new Date(date) : oldOrder.date,
            updatedAt: new Date()
          }
        }
    );

    const updatedOrder = await Order.findById(id);

    // Subtract new stock
    for (const item of updatedOrder.items) {
      const jtId = item.juiceType?._id || item.juiceType;
      await Product.findByIdAndUpdate(jtId, { $inc: { currentStock: -item.quantity } });
      const nkd = new Date(updatedOrder.date); nkd.setHours(0, 0, 0, 0);
      await Production.findOneAndUpdate(
          { juiceType: jtId, companyId: req.user.companyId, date: { $gte: nkd, $lt: new Date(nkd.getTime() + 86400000) } }, 
          { 
              $inc: { salesDuringProduction: item.quantity },
              $setOnInsert: { quantityProduced: 0, date: nkd }
          }, 
          { upsert: true }
      );
    }

    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    for (const item of order.items) {
      const jtId = item.juiceType?._id || item.juiceType;
      await Product.findByIdAndUpdate(jtId, { $inc: { currentStock: item.quantity } });
      const okd = new Date(order.date); okd.setHours(0, 0, 0, 0);
      await Production.findOneAndUpdate({ juiceType: jtId, companyId: req.user.companyId, date: { $gte: okd, $lt: new Date(okd.getTime() + 86400000) } }, { $inc: { salesDuringProduction: -item.quantity } });
    }
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (error) { res.status(400).json({ message: error.message }); }
};

const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, { $set: { orderStatus: req.body.status } }, { new: true });
    res.json(order);
  } catch (error) { res.status(400).json({ message: error.message }); }
};

const updateOrderPayment = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, { $set: { paidAmount: Number(req.body.paidAmount) } }, { new: true });
    res.json(order);
  } catch (error) { res.status(400).json({ message: error.message }); }
};

module.exports = { createOrder, getOrders, updateOrder, deleteOrder, updateOrderStatus, updateOrderPayment };
