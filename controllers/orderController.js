const Order = require('../models/Order');
const Product = require('../models/Product');

const createOrder = async (req, res) => {
  try {
    const { customerName, shopName, type, items, totalAmount, paidAmount } = req.body;

    // Check if enough filled stock is available
    for (const item of items) {
      const product = await Product.findById(item.juiceType);
      
      console.log(`--- ORDER DEBUG --- Checking ${product?.name}: Req=${item.quantity}, Stock=${product?.currentStock}`);

      if (!product || product.currentStock < item.quantity) {
        console.log(`--- ORDER DEBUG --- REJECTED: Insufficient stock for ${product?.name}`);
        return res.status(400).json({ message: `Not enough stock for ${product ? product.name : 'Unknown Product'}` });
      }
    }

    // Create order
    const order = await Order.create({
      customerName,
      shopName,
      type,
      items,
      totalAmount,
      paidAmount,
      createdBy: req.user._id
    });

    // Reduce filled stock
    for (const item of items) {
      const product = await Product.findById(item.juiceType);
      product.currentStock -= item.quantity;
      await product.save();
    }

    res.status(201).json(order);
  } catch (error) {
    console.error('--- ORDER ERROR DEBUG ---', error);
    res.status(400).json({ message: error.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate('items.juiceType').sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    // FALLBACK FOR DEMO (NO DB)
    res.json([
      { 
        _id: 'o1', 
        customerName: 'Aman Retailers', 
        type: 'B2B', 
        totalAmount: 12500, 
        paidAmount: 12500, 
        dueAmount: 0, 
        paymentStatus: 'paid', 
        orderStatus: 'delivered', 
        date: new Date(),
        items: [{ juiceType: { name: 'Apple Spark' }, quantity: 100, price: 45 }]
      },
      { 
        _id: 'o2', 
        customerName: 'Local Gym', 
        type: 'B2C', 
        totalAmount: 4500, 
        paidAmount: 2000, 
        dueAmount: 2500, 
        paymentStatus: 'partial', 
        orderStatus: 'pending', 
        date: new Date(),
        items: [{ juiceType: { name: 'Mango Blast' }, quantity: 40, price: 55 }]
      }
    ]);
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.orderStatus = req.body.status || order.orderStatus;
      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateOrderPayment = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.paidAmount = req.body.paidAmount || order.paidAmount;
      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Rollback stock (add back filled juice)
    for (const item of order.items) {
      const product = await Product.findById(item.juiceType);
      if (product) {
        product.currentStock += item.quantity;
        await product.save();
      }
    }

    await order.deleteOne();
    res.json({ message: 'Order removed and stock restored' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.customerName = req.body.customerName || order.customerName;
      order.shopName = req.body.shopName || order.shopName;
      order.type = req.body.type || order.type;
      order.orderStatus = req.body.orderStatus || order.orderStatus;
      order.paymentStatus = req.body.paymentStatus || order.paymentStatus;
      order.paidAmount = req.body.paidAmount || order.paidAmount;

      const updated = await order.save();
      res.json(updated);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createOrder, getOrders, updateOrderStatus, updateOrderPayment, deleteOrder, updateOrder };
