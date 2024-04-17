// models/BankAccount.js
const mongoose = require('mongoose');

const BankAccountSchema = new mongoose.Schema({
  account_number: { type: String, unique: true },
  balance: { type: Number, default: 0 },
  nic: String,
});

module.exports = mongoose.model('BankAccount', BankAccountSchema);
