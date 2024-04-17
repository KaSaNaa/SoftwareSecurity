require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  balance: { type: Number, required: true }, // Fix: Provide a valid data type for the balance field
  bankAccountNumber: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
});

module.exports = mongoose.model('User', UserSchema);
