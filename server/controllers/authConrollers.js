// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const JWT_SECRET = process.env.JWT_SECRET;

// Register a new user
exports.register = async (req, res) => {
  try {
    const { name, email, password, balance, bankAccountNumber } = req.body;
    // Check if the bank account number is provided
    if (!bankAccountNumber) {
      return res.status(400).json({ message: 'Bank account number is required' });
    }
    // Check if bank account number is already associated with an existing user
    const existingUserWithAccount = await User.findOne({ bankAccountNumber});
    if (existingUserWithAccount) {
      return res.status(400).json({ message: 'Bank account number already registered' });
    }
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword, balance });
    // Save the user to the database
    await newUser.save();
    // Respond with a success message
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    // Get the email and password from the request body
    const { email, password } = req.body;
    // Find the user with the provided email
    const user = await User.findOne({ email });
    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    // If the password does not match
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    // Create a token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    // Send the token as a cookie
    res.cookie('token', token, { httpOnly: true });
    // Respond with a success message
    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
