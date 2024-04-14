// controllers/transactionController.js
const User = require('../models/User');

// Transfer funds between accounts
exports.transferFunds = async (req, res) => {
  try {
    const { recipientEmail, amount } = req.body;
    const senderId = req.userId; // assuming userId is set in authentication middleware
    const sender = await User.findById(senderId);
    const recipient = await User.findOne({ email: recipientEmail });
    if (!sender || !recipient) {
      return res.status(404).json({ message: 'Sender or recipient not found' });
    }
    if (sender.balance < amount) {
      return res.status(400).json({ message: 'Insufficient balance' });
    }
    sender.balance -= amount;
    recipient.balance += amount;
    await sender.save();
    await recipient.save();
    res.json({ message: 'Funds transferred successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
