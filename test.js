const mongoose = require('mongoose');
const User = require('./models/User');

async function test() {
  await mongoose.connect('mongodb://yatree_admin:Mayank123@ac-n3u3fkt-shard-00-00.iuq9w0n.mongodb.net:27017,ac-n3u3fkt-shard-00-01.iuq9w0n.mongodb.net:27017,ac-n3u3fkt-shard-00-02.iuq9w0n.mongodb.net:27017/emjay_brewery?authSource=admin&tls=true');
  
  const email = 'abhay123';
  const user = await User.findOne({ 
      $or: [{ email }, { username: email }, { mobile: email }] 
    }).populate('branchId');
    
  console.log('Query result:', user ? 'Found' : 'Not Found');
  if (user) {
    const isMatch = await user.comparePassword('abhay123'); // or whatever
    console.log('Password match:', isMatch);
  }
  
  process.exit(0);
}
test().catch(console.error);
