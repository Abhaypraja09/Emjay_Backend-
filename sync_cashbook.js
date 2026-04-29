const mongoose = require('mongoose');
require('dotenv').config();
const Order = require('./models/Order');
const Purchase = require('./models/Purchase');
const BottleInventory = require('./models/BottleInventory');
const CashLog = require('./models/CashLog');

async function syncCashBook() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        // 1. Clear existing automated CashLogs to avoid duplicates
        // We'll only keep manual ones (those that don't match our automated descriptions)
        await CashLog.deleteMany({ 
            $or: [
                { description: { $regex: /^Sale to / } },
                { description: { $regex: /^Bottle\/Cap Purchase from / } },
                { description: { $regex: /^Purchase of / } }
            ]
        });
        console.log('Cleared existing automated CashLogs');

        // 2. Sync Orders (Sales)
        const orders = await Order.find();
        console.log(`Syncing ${orders.length} orders...`);
        for (const order of orders) {
            if (order.totalAmount > 0) {
                await CashLog.create({
                    companyId: order.companyId || 'emjay-master',
                    type: 'IN',
                    category: 'Sale',
                    amount: order.totalAmount, // Use total amount as requested
                    description: `Sale to ${order.customerName}`,
                    paymentMode: order.paymentMode || 'Cash',
                    date: order.date
                });
            }
        }

        // 3. Sync Purchases
        const purchases = await Purchase.find();
        console.log(`Syncing ${purchases.length} general purchases...`);
        for (const p of purchases) {
            if (p.cost > 0) {
                await CashLog.create({
                    companyId: p.companyId || 'emjay-master',
                    type: 'OUT',
                    category: 'Purchase',
                    amount: p.cost,
                    description: `Purchase of ${p.item} from ${p.supplier || 'Vendor'}`,
                    paymentMode: 'Cash',
                    date: p.date
                });
            }
        }

        // 4. Sync Bottle Purchases
        const bottlePurchases = await BottleInventory.find({ type: 'IN' });
        console.log(`Syncing ${bottlePurchases.length} bottle/cap purchases...`);
        for (const bp of bottlePurchases) {
            if (bp.totalCost > 0) {
                await CashLog.create({
                    companyId: bp.companyId || 'emjay-master',
                    type: 'OUT',
                    category: 'Purchase',
                    amount: bp.totalCost,
                    description: `Bottle/Cap Purchase from ${bp.supplierName}`,
                    paymentMode: 'Cash',
                    date: bp.date
                });
            }
        }

        console.log('Sync completed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Sync failed:', error);
        process.exit(1);
    }
}

syncCashBook();
