const mongoose = require('mongoose');
const Transaction = require('./models/Transaction');
const Party = require('./models/Party');
require('dotenv').config();

async function fixTransactions() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB');

        // Fix Opening Balance transactions for customers (they should be credit if balance > 0)
        const parties = await Party.find({ type: 'customer' });
        for (const party of parties) {
            if (party.openingBalance > 0 || party.balance > 0) {
                // Find Opening Balance transaction
                const obTx = await Transaction.findOne({ partyId: party._id, description: 'Opening Balance', type: 'debit' });
                if (obTx) {
                    obTx.type = 'credit';
                    await obTx.save();
                    console.log(`Fixed Opening Balance for ${party.name}`);
                }
            }
        }

        // Recalculate all balances to ensure 100% accuracy
        const allParties = await Party.find();
        for (const p of allParties) {
            const txns = await Transaction.find({ partyId: p._id });
            const calculatedBalance = txns.reduce((acc, tx) => {
                return acc + (tx.type === 'credit' ? tx.amount : -tx.amount);
            }, 0);
            
            if (p.balance !== calculatedBalance) {
                console.log(`Correcting balance for ${p.name}: ${p.balance} -> ${calculatedBalance}`);
                p.balance = calculatedBalance;
                await p.save();
            }
        }
        
        console.log('Done!');
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
fixTransactions();
