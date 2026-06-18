const Purchase = require('../models/Purchase');
const CashLog = require('../models/CashLog');

exports.getPurchases = async (req, res) => {
  try {
    const { month, year } = req.query;
    let query = { companyId: req.user.companyId };
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
    const purchases = await Purchase.find(query).sort({ date: -1 });
    res.json(purchases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addPurchase = async (req, res) => {
  try {
    const purchase = new Purchase({
        ...req.body,
        companyId: req.user.companyId
    });
    await purchase.save();

    // Link to Party Ledger if partyId exists
    if (req.body.partyId) {
        const Party = require('../models/Party');
        const Transaction = require('../models/Transaction');

        // Fetch Party to get vendor name
        const party = await Party.findById(req.body.partyId);
        const vendorName = party ? party.name : 'Vendor';

        const paymentLabel = (purchase.status === 'Cash' || purchase.status === 'Paid') ? ' [Paid]' :
                             (purchase.status === 'Online/UPI') ? ' [Paid Online]' :
                             (purchase.status === 'Split') ? ' [Split Paid]' : '';
                             
        const invStr = purchase.invoiceNumber ? ` (Inv: ${purchase.invoiceNumber})` : '';
                             
        await new Transaction({
            partyId: req.body.partyId,
            purchaseId: purchase._id,
            amount: purchase.totalCost || req.body.cost,
            type: 'debit',
            description: `Purchase${invStr} - ${vendorName}${paymentLabel}`,
            date: purchase.date || Date.now()
        }).save();

        // 2. If it was a CASH or PAID purchase, record an immediate CREDIT (we paid them)
        // This keeps the balance 0 but shows the full history in the ledger
        if (purchase.status === 'Cash' || purchase.status === 'Paid') {
            await new Transaction({
                partyId: req.body.partyId,
                purchaseId: purchase._id,
                amount: purchase.totalCost || req.body.cost,
                type: 'credit',
                description: `Payment to ${vendorName}`,
                date: purchase.date || Date.now()
            }).save();
        } else if (purchase.status === 'Online/UPI') {
            await new Transaction({
                partyId: req.body.partyId,
                purchaseId: purchase._id,
                amount: purchase.totalCost || req.body.cost,
                type: 'credit',
                description: `Online Payment to ${vendorName}`,
                date: purchase.date || Date.now()
            }).save();
        } else if (purchase.status === 'Split') {
            if (purchase.paidCash > 0) {
                await new Transaction({
                    partyId: req.body.partyId,
                    purchaseId: purchase._id,
                    amount: purchase.paidCash,
                    type: 'credit',
                    description: `Cash Payment to ${vendorName}`,
                    date: purchase.date || Date.now()
                }).save();
            }
            if (purchase.paidOnline > 0) {
                await new Transaction({
                    partyId: req.body.partyId,
                    purchaseId: purchase._id,
                    amount: purchase.paidOnline,
                    type: 'credit',
                    description: `Online Payment to ${vendorName}`,
                    date: purchase.date || Date.now()
                }).save();
            }
        }

        // 3. Recalculate and update the party's balance from scratch to ensure absolute accuracy
        const txns = await Transaction.find({ partyId: req.body.partyId });
        const newBalance = txns.reduce((acc, tx) => acc + (tx.type === 'credit' ? tx.amount : -tx.amount), 0);
        await Party.findByIdAndUpdate(req.body.partyId, { balance: newBalance });
    }

    let cashAmount = 0;
    if (purchase.status === 'Cash' || purchase.status === 'Paid') {
        cashAmount = purchase.totalCost || req.body.cost;
    } else if (purchase.status === 'Split') {
        cashAmount = purchase.paidCash;
    }

    if (cashAmount > 0) {
        const itemNames = purchase.items ? purchase.items.map(i => i.name).join(', ') : 'Items';
        await new CashLog({
            companyId: purchase.companyId,
            type: 'OUT',
            amount: cashAmount,
            category: 'Purchase',
            paymentMode: 'Cash',
            description: `Purchase: ${itemNames}`,
            date: purchase.date || Date.now(),
            referenceId: purchase._id
        }).save();
    }

    res.status(201).json(purchase);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updatePurchase = async (req, res) => {
  try {
    const oldPurchase = await Purchase.findOne({ _id: req.params.id, companyId: req.user.companyId });
    if (!oldPurchase) return res.status(404).json({ message: 'Purchase not found or unauthorized' });

    const purchase = await Purchase.findOneAndUpdate(
        { _id: req.params.id, companyId: req.user.companyId },
        req.body,
        { new: true }
    );

    // Sync with Party Ledger if partyId is involved
    if (purchase.partyId || oldPurchase.partyId) {
        const Party = require('../models/Party');
        const Transaction = require('../models/Transaction');

        // 1. Clear ALL old transactions related to this purchase
        await Transaction.deleteMany({ purchaseId: purchase._id });

        // 2. Re-create transactions if a party is selected
        if (purchase.partyId) {
            const party = await Party.findById(purchase.partyId);
            const vendorName = party ? party.name : 'Vendor';

            const paymentLabel = (purchase.status === 'Cash' || purchase.status === 'Paid') ? ' [Paid]' :
                                 (purchase.status === 'Online/UPI') ? ' [Paid Online]' :
                                 (purchase.status === 'Split') ? ' [Split Paid]' : '';

            const invStr = purchase.invoiceNumber ? ` (Inv: ${purchase.invoiceNumber})` : '';

            // Debit (Purchase) combined for all items
            await new Transaction({
                partyId: purchase.partyId,
                purchaseId: purchase._id,
                amount: purchase.totalCost || purchase.cost,
                type: 'debit',
                description: `Purchase${invStr} - ${vendorName}${paymentLabel}`,
                date: purchase.date || Date.now()
            }).save();

            // Credit (Payment) if paid
            if (purchase.status === 'Cash' || purchase.status === 'Paid') {
                await new Transaction({
                    partyId: purchase.partyId,
                    purchaseId: purchase._id,
                    amount: purchase.totalCost || purchase.cost,
                    type: 'credit',
                    description: `Payment to ${vendorName}`,
                    date: purchase.date || Date.now()
                }).save();
            } else if (purchase.status === 'Online/UPI') {
                await new Transaction({
                    partyId: purchase.partyId,
                    purchaseId: purchase._id,
                    amount: purchase.totalCost || purchase.cost,
                    type: 'credit',
                    description: `Online Payment to ${vendorName}`,
                    date: purchase.date || Date.now()
                }).save();
            } else if (purchase.status === 'Split') {
                if (purchase.paidCash > 0) {
                    await new Transaction({
                        partyId: purchase.partyId,
                        purchaseId: purchase._id,
                        amount: purchase.paidCash,
                        type: 'credit',
                        description: `Cash Payment to ${vendorName}`,
                        date: purchase.date || Date.now()
                    }).save();
                }
                if (purchase.paidOnline > 0) {
                    await new Transaction({
                        partyId: purchase.partyId,
                        purchaseId: purchase._id,
                        amount: purchase.paidOnline,
                        type: 'credit',
                        description: `Online Payment to ${vendorName}`,
                        date: purchase.date || Date.now()
                    }).save();
                }
            }

            // Recalculate balance for the new party
            const txns = await Transaction.find({ partyId: purchase.partyId });
            const newBalance = txns.reduce((acc, tx) => acc + (tx.type === 'credit' ? tx.amount : -tx.amount), 0);
            await Party.findByIdAndUpdate(purchase.partyId, { balance: newBalance });
        }

        // 3. Also recalculate balance for the OLD party if it was changed
        if (oldPurchase.partyId && oldPurchase.partyId.toString() !== purchase.partyId?.toString()) {
            const oldTxns = await Transaction.find({ partyId: oldPurchase.partyId });
            const oldBalance = oldTxns.reduce((acc, tx) => acc + (tx.type === 'credit' ? tx.amount : -tx.amount), 0);
            await Party.findByIdAndUpdate(oldPurchase.partyId, { balance: oldBalance });
        }
    }

    // Sync CashLog
    await CashLog.deleteMany({ referenceId: oldPurchase._id });

    let updatedCashAmount = 0;
    if (purchase.status === 'Cash' || purchase.status === 'Paid') {
        updatedCashAmount = purchase.totalCost || req.body.cost;
    } else if (purchase.status === 'Split') {
        updatedCashAmount = purchase.paidCash;
    }

    if (updatedCashAmount > 0) {
        const itemNames = purchase.items ? purchase.items.map(i => i.name).join(', ') : 'Items';
        await new CashLog({
            companyId: purchase.companyId,
            type: 'OUT',
            amount: updatedCashAmount,
            category: 'Purchase',
            paymentMode: 'Cash',
            description: `Purchase: ${itemNames}`,
            date: purchase.date || Date.now(),
            referenceId: purchase._id
        }).save();
    }

    res.json(purchase);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deletePurchase = async (req, res) => {
  try {
    const purchase = await Purchase.findOneAndDelete({ _id: req.params.id, companyId: req.user.companyId });
    if (!purchase) return res.status(404).json({ message: 'Purchase not found or unauthorized' });

    // Remove ledger transaction records (both debit and credit entries)
    const Transaction = require('../models/Transaction');
    const Party = require('../models/Party');
    await Transaction.deleteMany({ purchaseId: purchase._id });

    // Recalculate balance for the vendor to ensure it's 100% synced after deletion
    if (purchase.partyId) {
        const txns = await Transaction.find({ partyId: purchase.partyId });
        const balance = txns.reduce((acc, tx) => acc + (tx.type === 'credit' ? tx.amount : -tx.amount), 0);
        await Party.findByIdAndUpdate(purchase.partyId, { balance });
    }

    // Remove from CashLog
    await CashLog.deleteMany({ referenceId: purchase._id });

    res.json({ message: 'Purchase record deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPurchaseStats = async (req, res) => {
    try {
        const stats = await Purchase.aggregate([
            { $match: { companyId: req.user.companyId } },
            { $group: { _id: null, totalCost: { $sum: "$cost" }, pending: { $sum: { $cond: [{ $eq: ["$status", "pending"]}, "$cost", 0] } } } }
        ]);
        res.json(stats[0] || { totalCost: 0, pending: 0 });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
