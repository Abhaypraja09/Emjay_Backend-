const Order = require('../models/Order');
const Product = require('../models/Product');
const Production = require('../models/Production');
const mongoose = require('mongoose');
const CashLog = require('../models/CashLog');
const Party = require('../models/Party');
const Transaction = require('../models/Transaction');
const BranchStock = require('../models/BranchStock');
const BranchTransfer = require('../models/BranchTransfer');

const getFinancialYearDates = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  let startDate, endDate;
  if (month < 4) {
    startDate = new Date(`${year - 1}-04-01T00:00:00.000Z`);
    endDate = new Date(`${year}-03-31T23:59:59.999Z`);
  } else {
    startDate = new Date(`${year}-04-01T00:00:00.000Z`);
    endDate = new Date(`${year + 1}-03-31T23:59:59.999Z`);
  }
  return { startDate, endDate };
};

const generateNextInvoiceNo = async (companyId, date) => {
  const { startDate, endDate } = getFinancialYearDates(date);
  
  const latestOrder = await Order.findOne({ 
    companyId, 
    date: { $gte: startDate, $lte: endDate },
    invoiceNo: { $regex: /^E-?B-/i } 
  }).sort({ createdAt: -1 });

  let nextNum = 1;
  if (latestOrder && latestOrder.invoiceNo) {
    const match = latestOrder.invoiceNo.match(/\d+$/);
    if (match) {
      const lastNum = parseInt(match[0], 10);
      if (!isNaN(lastNum)) {
        nextNum = lastNum + 1;
      }
    }
  }

  return `EB-${nextNum.toString().padStart(2, '0')}`;
};

const createOrder = async (req, res) => {
  try {
    if (req.user.role === 'branch_admin' && req.user.branchId) {
      req.body.sourceBranchId = req.user.branchId;
    }
    for (const item of req.body.items) {
      const jtId = item.juiceType?._id || item.juiceType;
      if (req.body.sourceBranchId) {
        const stock = await BranchStock.findOne({ companyId: req.user.companyId, partyId: req.body.sourceBranchId, juiceType: jtId });
        if (!stock || stock.quantity < item.quantity) {
          return res.status(400).json({ message: `Insufficient stock in Branch. Available: ${stock ? stock.quantity : 0}` });
        }
      } else {
        const product = await Product.findOne({ _id: jtId, companyId: req.user.companyId });
        if (!product || product.currentStock < item.quantity) {
          return res.status(400).json({ message: `Insufficient stock for ${product?.name || 'Product'}. Available: ${product?.currentStock || 0}` });
        }
      }
    }

    const orderDate = req.body.date || new Date();
    const invoiceNo = await generateNextInvoiceNo(req.user.companyId, orderDate);

    const order = new Order({ ...req.body, invoiceNo, companyId: req.user.companyId, createdBy: req.user._id });
    const savedOrder = await order.save();
    for (const item of savedOrder.items) {
      const jtId = item.juiceType?._id || item.juiceType;
      
      if (savedOrder.sourceBranchId) {
        await BranchStock.findOneAndUpdate(
          { companyId: req.user.companyId, partyId: savedOrder.sourceBranchId, juiceType: jtId },
          { $inc: { quantity: -item.quantity } }
        );
        await BranchTransfer.create({
          companyId: req.user.companyId,
          partyId: savedOrder.sourceBranchId,
          juiceType: jtId,
          type: 'OUT',
          quantity: item.quantity,
          rate: item.price,
          date: savedOrder.date,
          description: `Sale to ${savedOrder.customerName}`
        });
      } else {
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

      // Handle Branch Transfer / Distributor Stock IN
      if (['Branch Transfer', 'Distributor'].includes(savedOrder.type) && savedOrder.partyId) {
        await BranchStock.findOneAndUpdate(
          { companyId: req.user.companyId, partyId: savedOrder.partyId, juiceType: jtId },
          { $inc: { quantity: item.quantity } },
          { upsert: true, new: true }
        );

        await BranchTransfer.create({
          companyId: req.user.companyId,
          partyId: savedOrder.partyId,
          juiceType: jtId,
          type: 'IN',
          quantity: item.quantity,
          rate: item.price,
          date: savedOrder.date
        });
      }
    }

    // Update Party Ledger if dueAmount exists
    if (savedOrder.partyId && savedOrder.dueAmount > 0) {
      const transaction = new Transaction({
        partyId: savedOrder.partyId,
        amount: savedOrder.dueAmount,
        type: 'credit', // Credit increases their outstanding balance
        description: `Sale Bill ${savedOrder.type} - Due`,
        date: savedOrder.date
      });
      await transaction.save();
      await Party.findByIdAndUpdate(savedOrder.partyId, { $inc: { balance: savedOrder.dueAmount } });
    }

    // Cash Book and Bank Book entries are generated dynamically by their respective controllers
    // using the Order collection.

    res.status(201).json(savedOrder);
  } catch (error) { res.status(400).json({ message: error.message }); }
};

const getOrders = async (req, res) => {
  try {
    const { month, year } = req.query;
    const query = { companyId: req.user.companyId };
    
    if (month !== undefined && year !== undefined) {
      const m = parseInt(month);
      const y = parseInt(year);
      let startDate, endDate;
      if (m === 0) {
        startDate = new Date(y, 3, 1);
        endDate = new Date(y + 1, 2, 31, 23, 59, 59, 999);
      } else {
        const actualYear = m <= 3 ? y + 1 : y;
        startDate = new Date(actualYear, m - 1, 1);
        endDate = new Date(actualYear, m, 0, 23, 59, 59, 999);
      }
      query.date = { $gte: startDate, $lte: endDate };
    }
    if (req.user.role === 'branch_admin' && req.user.branchId) {
      query.sourceBranchId = req.user.branchId;
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
       const oldItem = oldOrder.items.find(oi => oi.juiceType.toString() === jtId.toString());
       const oldQty = oldItem ? oldItem.quantity : 0;
       
       // New Stock Needed = New Qty - Old Qty
       const diff = Number(it.quantity) - oldQty;
       if (diff > 0) {
         if (oldOrder.sourceBranchId) {
           const stock = await BranchStock.findOne({ companyId: req.user.companyId, partyId: oldOrder.sourceBranchId, juiceType: jtId });
           if (!stock || stock.quantity < diff) {
             return res.status(400).json({ message: `Insufficient stock in Branch. Additional required: ${diff}, Available: ${stock ? stock.quantity : 0}` });
           }
         } else {
           const product = await Product.findOne({ _id: jtId, companyId: req.user.companyId });
           if (product.currentStock < diff) {
             return res.status(400).json({ message: `Insufficient stock. Additional required: ${diff}, Available: ${product.currentStock}` });
           }
         }
       }
    }

    // Inventory Rollback
    for (const item of oldOrder.items) {
      const jtId = item.juiceType?._id || item.juiceType;
      
      if (oldOrder.sourceBranchId) {
        await BranchStock.findOneAndUpdate(
          { companyId: req.user.companyId, partyId: oldOrder.sourceBranchId, juiceType: jtId },
          { $inc: { quantity: item.quantity } }
        );
        await BranchTransfer.deleteOne({
          companyId: req.user.companyId,
          partyId: oldOrder.sourceBranchId,
          juiceType: jtId,
          type: 'OUT',
          quantity: item.quantity
        });
      } else {
        await Product.findByIdAndUpdate(jtId, { $inc: { currentStock: item.quantity } });
        const okd = new Date(oldOrder.date); okd.setHours(0, 0, 0, 0);
        await Production.findOneAndUpdate({ juiceType: jtId, companyId: req.user.companyId, date: { $gte: okd, $lt: new Date(okd.getTime() + 86400000) } }, { $inc: { salesDuringProduction: -item.quantity } });
      }

      // Rollback Branch Stock
      if (['Branch Transfer', 'Distributor'].includes(oldOrder.type) && oldOrder.partyId) {
        await BranchStock.findOneAndUpdate(
          { companyId: req.user.companyId, partyId: oldOrder.partyId, juiceType: jtId },
          { $inc: { quantity: -item.quantity } }
        );
        await BranchTransfer.deleteOne({
          companyId: req.user.companyId,
          partyId: oldOrder.partyId,
          juiceType: jtId,
          type: 'IN',
          quantity: item.quantity
        });
      }
    }

    // Rollback Party Ledger
    if (oldOrder.partyId && oldOrder.dueAmount > 0) {
      await Party.findByIdAndUpdate(oldOrder.partyId, { $inc: { balance: -oldOrder.dueAmount } });
      await Transaction.deleteOne({
        partyId: oldOrder.partyId,
        amount: oldOrder.dueAmount,
        type: 'credit',
        description: `Sale Bill ${oldOrder.type} - Due`,
        date: oldOrder.date
      });
    }

    // DIRECT MONGODB UPDATE (Bypassing Mongoose complexity)
    const rawItems = items.map(it => ({
      juiceType: new mongoose.Types.ObjectId(it.juiceType?._id || it.juiceType),
      quantity: Number(it.quantity),
      price: Number(it.price)
    }));

    const calculatedGrandTotal = Number(totalAmount) + Number(req.body.gst || 0) - Number(req.body.discount || 0);
    const calculatedPaidAmount = Number(paidAmount || 0);
    const calculatedDueAmount = calculatedGrandTotal - calculatedPaidAmount;
    let calculatedPaymentStatus = 'unpaid';
    if (calculatedPaidAmount >= calculatedGrandTotal) calculatedPaymentStatus = 'paid';
    else if (calculatedPaidAmount > 0) calculatedPaymentStatus = 'partial';

    await mongoose.connection.db.collection('orders').updateOne(
        { _id: new mongoose.Types.ObjectId(id) },
        { 
          $set: {
            customerName,
            shopName,
            type,
            items: rawItems,
            totalAmount: Number(totalAmount),
            paidAmount: calculatedPaidAmount,
            paidCash: Number(req.body.paidCash || 0),
            paidOnline: Number(req.body.paidOnline || 0),
            paymentMode: req.body.paymentMode || oldOrder.paymentMode || 'Cash',
            paymentStatus: calculatedPaymentStatus,
            gst: Number(req.body.gst || 0),
            discount: Number(req.body.discount || 0),
            grandTotal: calculatedGrandTotal,
            date: date ? new Date(date) : oldOrder.date,
            partyId: req.body.partyId ? new mongoose.Types.ObjectId(req.body.partyId) : null,
            dueAmount: calculatedDueAmount,
            updatedAt: new Date()
          }
        }
    );

    const updatedOrder = await Order.findById(id);

    // Subtract new stock
    for (const item of updatedOrder.items) {
      const jtId = item.juiceType?._id || item.juiceType;
      
      if (updatedOrder.sourceBranchId) {
        await BranchStock.findOneAndUpdate(
          { companyId: req.user.companyId, partyId: updatedOrder.sourceBranchId, juiceType: jtId },
          { $inc: { quantity: -item.quantity } }
        );
        await BranchTransfer.create({
          companyId: req.user.companyId,
          partyId: updatedOrder.sourceBranchId,
          juiceType: jtId,
          type: 'OUT',
          quantity: item.quantity,
          rate: item.price,
          date: updatedOrder.date,
          description: `Sale to ${updatedOrder.customerName}`
        });
      } else {
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

      // Apply Branch Stock
      if (['Branch Transfer', 'Distributor'].includes(updatedOrder.type) && updatedOrder.partyId) {
        await BranchStock.findOneAndUpdate(
          { companyId: req.user.companyId, partyId: updatedOrder.partyId, juiceType: jtId },
          { $inc: { quantity: item.quantity } },
          { upsert: true, new: true }
        );
        await BranchTransfer.create({
          companyId: req.user.companyId,
          partyId: updatedOrder.partyId,
          juiceType: jtId,
          type: 'IN',
          quantity: item.quantity,
          rate: item.price,
          date: updatedOrder.date
        });
      }
    }

    // Apply Party Ledger
    if (updatedOrder.partyId && updatedOrder.dueAmount > 0) {
      const transaction = new Transaction({
        partyId: updatedOrder.partyId,
        amount: updatedOrder.dueAmount,
        type: 'credit',
        description: `Sale Bill ${updatedOrder.type} - Due`,
        date: updatedOrder.date
      });
      await transaction.save();
      await Party.findByIdAndUpdate(updatedOrder.partyId, { $inc: { balance: updatedOrder.dueAmount } });
    }

    // Sync CashLog / BankLog: remove old entry and create a new one if paidAmount > 0 and paymentMode is not Due
    const BankLog = require('../models/BankLog');
    await CashLog.deleteOne({ companyId: req.user.companyId, category: 'Sale', description: `Sale to ${oldOrder.customerName}` });
    await BankLog.deleteOne({ companyId: req.user.companyId, category: 'Sale', description: `Sale to ${oldOrder.customerName}` });
    
    const newPayMode = req.body.paymentMode || oldOrder.paymentMode || 'Cash';
    if (Number(paidAmount) > 0 && newPayMode !== 'Credit' && newPayMode !== 'Due') {
      const logData = {
        companyId: req.user.companyId,
        type: 'IN',
        category: 'Sale',
        amount: Number(paidAmount),
        description: `Sale to ${customerName}`,
        paymentMode: newPayMode,
        date: date ? new Date(date) : oldOrder.date,
        referenceId: id
      };
      
      if (newPayMode === 'Cash') {
        await CashLog.create(logData);
      } else {
        await BankLog.create(logData);
      }
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
      
      if (order.sourceBranchId) {
        await BranchStock.findOneAndUpdate(
          { companyId: req.user.companyId, partyId: order.sourceBranchId, juiceType: jtId },
          { $inc: { quantity: item.quantity } }
        );
        await BranchTransfer.deleteOne({
          companyId: req.user.companyId,
          partyId: order.sourceBranchId,
          juiceType: jtId,
          type: 'OUT',
          quantity: item.quantity
        });
      } else {
        await Product.findByIdAndUpdate(jtId, { $inc: { currentStock: item.quantity } });
        const okd = new Date(order.date); okd.setHours(0, 0, 0, 0);
        await Production.findOneAndUpdate({ juiceType: jtId, companyId: req.user.companyId, date: { $gte: okd, $lt: new Date(okd.getTime() + 86400000) } }, { $inc: { salesDuringProduction: -item.quantity } });
      }

      // Reverse Branch Stock if it was a transfer
      if (['Branch Transfer', 'Distributor'].includes(order.type) && order.partyId) {
        await BranchStock.findOneAndUpdate(
          { companyId: req.user.companyId, partyId: order.partyId, juiceType: jtId },
          { $inc: { quantity: -item.quantity } }
        );
        // Delete the BranchTransfer log for this specific quantity (removed date to avoid discrepancies)
        await BranchTransfer.deleteOne({
          companyId: req.user.companyId,
          partyId: order.partyId,
          juiceType: jtId,
          type: 'IN',
          quantity: item.quantity
        });
      }
    }

    // Reverse Party Ledger if it was Due
    if (order.partyId && order.dueAmount > 0) {
      await Party.findByIdAndUpdate(order.partyId, { $inc: { balance: -order.dueAmount } });
      await Transaction.deleteOne({
        partyId: order.partyId,
        amount: order.dueAmount,
        type: 'credit',
        description: `Sale Bill ${order.type} - Due`,
        date: order.date
      });
    }

    await Order.findByIdAndDelete(req.params.id);
    // Delete from CashLog and BankLog
    await CashLog.deleteOne({ companyId: req.user.companyId, referenceId: req.params.id });
    const BankLog = require('../models/BankLog');
    await BankLog.deleteOne({ companyId: req.user.companyId, referenceId: req.params.id });

    res.json({ message: 'Order removed' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
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

const fetchNextInvoiceNo = async (req, res) => {
  try {
    const date = req.query.date || new Date();
    const invoiceNo = await generateNextInvoiceNo(req.user.companyId, date);
    res.json({ invoiceNo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createOrder,
  getOrders,
  updateOrderStatus,
  updateOrderPayment,
  deleteOrder,
  updateOrder,
  fetchNextInvoiceNo
};
