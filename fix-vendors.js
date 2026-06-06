const mongoose = require('mongoose');
require('dotenv').config();

async function fix() {
  await mongoose.connect(process.env.MONGO_URI);
  
  const Purchase = require('./models/Purchase');
  const Party = require('./models/Party');
  const Transaction = require('./models/Transaction');
  
  // Step 1: Get all purchases with a supplier name
  const purchases = await Purchase.find().lean();
  const purchasesWithSupplier = purchases.filter(p => p.supplier && p.supplier.trim());
  
  console.log('Purchases found:', purchases.length);
  console.log('Purchases with supplier:', purchasesWithSupplier.length);
  
  // Step 2: Create unique parties from supplier names
  const supplierNames = [...new Set(purchasesWithSupplier.map(p => p.supplier.trim()))];
  console.log('Unique suppliers:', supplierNames);
  
  for (const name of supplierNames) {
    // Case-insensitive search
    let party = await Party.findOne({ name: { $regex: new RegExp('^' + name + '$', 'i') } });
    
    if (!party) {
      party = await Party.create({ name, type: 'supplier', balance: 0 });
      console.log('Created party:', party.name, party._id.toString());
    } else {
      console.log('Party already exists:', party.name, party._id.toString());
    }
    
    // Step 3: Link all purchases from this supplier to the party
    const matchingPurchases = purchasesWithSupplier.filter(p => 
      p.supplier.trim().toLowerCase() === name.toLowerCase()
    );
    
    for (const pp of matchingPurchases) {
      if (!pp.partyId || pp.partyId.toString() !== party._id.toString()) {
        await Purchase.findByIdAndUpdate(pp._id, { partyId: party._id });
        console.log('Linked purchase:', pp.item, 'to', name);
        
        // Create transaction record only for PENDING purchases (PAID = settled on spot)
        if (pp.status === 'pending') {
          const existingTx = await Transaction.findOne({ purchaseId: pp._id });
          if (!existingTx) {
            await Transaction.create({
              partyId: party._id,
              purchaseId: pp._id,
              amount: pp.cost,
              type: 'debit',
              description: 'Purchase: ' + pp.item,
              date: pp.date
            });
            await Party.findByIdAndUpdate(party._id, { $inc: { balance: -pp.cost } });
            console.log('Created pending transaction for:', pp.item, '₹' + pp.cost);
          }
        }
      }
    }
  }
  
  // Clean up orphaned transactions (parties that were deleted)
  const allParties = await Party.find().lean();
  const validPartyIds = allParties.map(p => p._id.toString());
  const allTxns = await Transaction.find().lean();
  
  for (const tx of allTxns) {
    if (!validPartyIds.includes(tx.partyId.toString())) {
      await Transaction.findByIdAndDelete(tx._id);
      console.log('Deleted orphaned transaction:', tx._id.toString());
    }
  }
  
  const finalParties = await Party.find().lean();
  console.log('\n=== FINAL PARTIES ===');
  finalParties.forEach(p => console.log(p.name, '| type:', p.type, '| balance:', p.balance));
  
  const finalPurchases = await Purchase.find().lean();
  console.log('\n=== FINAL PURCHASES ===');
  finalPurchases.forEach(p => console.log(p.item, '| supplier:', p.supplier, '| partyId:', p.partyId ? p.partyId.toString() : 'NONE'));
  
  await mongoose.disconnect();
  console.log('\nDone! All vendor data restored.');
}

fix().catch(console.error);
