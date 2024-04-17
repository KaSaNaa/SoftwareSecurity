const User = require('../models/User');
const BankAccount = require('../models/BankAccount');

exports.transferFunds = async (req, res) => {
  try {
    const { recipientEmail, amount } = req.body;

    const senderId = req.userId; // Assuming userId is set in authentication middleware

    const sender = await User.findById(senderId);
    const recipient = await User.findOne({ email: recipientEmail });

    // Check if sender and recipient exist
    if (!sender || !recipient) {
      return res.status(404).json({ message: 'Sender or recipient not found' });
    }

    // Check if amount is a number and is greater than 0
    if (typeof amount !== 'number' || amount <= 0) {
      return res.status(400).json({ message: 'Invalid amount' });
    }

    // Check if sender has sufficient balance
    if (sender.balance < amount) {
      return res.status(400).json({ message: 'Insufficient balance' });
    }

    // Deduct amount from sender and update balance
    sender.balance -= amount;
    await sender.save();

    // Credit amount to recipient and update balance
    recipient.balance += amount;
    await recipient.save();

    // Update balances in bank accounts
    const senderBankAccount = await BankAccount.findOne({ account_number: sender.bankAccountNumber });
    const recipientBankAccount = await BankAccount.findOne({ account_number: recipient.bankAccountNumber });

    if (!senderBankAccount || !recipientBankAccount) {
      return res.status(404).json({ message: 'Sender or recipient bank account not found' });
    }

    senderBankAccount.balance -= amount; // Deduct amount from sender's bank account
    recipientBankAccount.balance += amount; // Credit amount to recipient's bank account

    await senderBankAccount.save();
    await recipientBankAccount.save();

    res.json({ message: 'Funds transferred successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
