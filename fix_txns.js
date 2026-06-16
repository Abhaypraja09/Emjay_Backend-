require('dotenv').config();
const mongoose = require('mongoose');
const Purchase = require('./models/Purchase');
const Transaction = require('./models/Transaction');

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log('Connected to DB');
  const purchases = await Purchase.find({});
  for (const p of purchases) {
    if (!p.partyId) continue;
    
    // Check if there are transactions for this purchase
    const txns = await Transaction.find({ purchaseId: p._id });
    if (txns.length > 0) {
      // Delete old transactions
      await Transaction.deleteMany({ purchaseId: p._id });
      
      const paymentLabel = (p.status === 'Cash' || p.status === 'Paid') ? ' [Paid]' :
                           (p.status === 'Online/UPI') ? ' [Paid Online]' :
                           (p.status === 'Split') ? ' [Split Paid]' : '';

      // Re-create debit
      if (p.items && p.items.length > 0) {
          for (const item of p.items) {
              const amt = Number(item.amount) || (Number(item.quantity) * Number(item.rate)) || 0;
              await new Transaction({
                  partyId: p.partyId,
                  purchaseId: p._id,
                  amount: amt,
                  type: 'debit',
                  description: `Purchase: ${item.name || 'Item'} (${item.quantity || 1} ${item.unit || 'Units'})${paymentLabel}`,
                  date: p.date || Date.now()
              }).save();
          }
      } else {
          const amt = Number(p.totalCost) || Number(p.cost) || 0;
          await new Transaction({
              partyId: p.partyId,
              purchaseId: p._id,
              amount: amt,
              type: 'debit',
              description: `Purchase: Items${paymentLabel}`,
              date: p.date || Date.now()
          }).save();
      }

      // Re-create credit
      const itemNames = p.items ? p.items.map(i => i.name).join(', ') : 'Items';
      const paymentAmt = Number(p.totalCost) || Number(p.cost) || 0;
      if (p.status === 'Cash' || p.status === 'Paid') {
          await new Transaction({
              partyId: p.partyId, purchaseId: p._id, amount: paymentAmt,
              type: 'credit', description: `Payment for Purchase: ${itemNames}`, date: p.date || Date.now()
          }).save();
      } else if (p.status === 'Online/UPI') {
          await new Transaction({
              partyId: p.partyId, purchaseId: p._id, amount: paymentAmt,
              type: 'credit', description: `Online Payment for Purchase: ${itemNames}`, date: p.date || Date.now()
          }).save();
      } else if (p.status === 'Split') {
          if (Number(p.paidCash) > 0) await new Transaction({ partyId: p.partyId, purchaseId: p._id, amount: Number(p.paidCash), type: 'credit', description: `Cash Payment for Purchase: ${itemNames}`, date: p.date || Date.now() }).save();
          if (Number(p.paidOnline) > 0) await new Transaction({ partyId: p.partyId, purchaseId: p._id, amount: Number(p.paidOnline), type: 'credit', description: `Online Payment for Purchase: ${itemNames}`, date: p.date || Date.now() }).save();
      }
    }
  }
  
  // Recalculate balances
  const Party = require('./models/Party');
  const parties = await Party.find({});
  for (const party of parties) {
    const txns = await Transaction.find({ partyId: party._id });
    const bal = txns.reduce((a, t) => a + (t.type === 'credit' ? t.amount : -t.amount), 0);
    party.balance = bal;
    await party.save();
  }
  
  console.log('Done fixing transactions');
  process.exit(0);
});
