const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const Party = require('./models/Party');
const Transaction = require('./models/Transaction');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to DB');
    const parties = await Party.find();
    
    for (let party of parties) {
        const txns = await Transaction.find({ partyId: party._id });
        let newBalance = 0;
        for (let tx of txns) {
            newBalance += (tx.type === 'credit' ? tx.amount : -tx.amount);
        }
        
        await Party.findByIdAndUpdate(party._id, { balance: newBalance });
        console.log(`Updated ${party.name} balance to ${newBalance}`);
    }
    console.log('Done!');
    process.exit(0);
  })
  .catch(err => console.error(err));
