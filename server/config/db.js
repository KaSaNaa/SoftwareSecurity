const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/test"

const connectDB = async () => {
  mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));
};

module.exports = connectDB;