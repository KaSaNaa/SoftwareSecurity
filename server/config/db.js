const mongoose = require('mongoose');
const { MONGO_URI } = require('../config');
const mongoURI = MONGO_URI;

const connectDB = async () => {
  mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));
};

module.exports = connectDB;