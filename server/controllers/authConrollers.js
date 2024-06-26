// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const BankAccount = require('../models/BankAccount');
const { JWT_SECRET } = require('../config');
// app.js or server.js
const JWT_SECRET_KEY = JWT_SECRET;

// Register a new user
exports.register = async (req, res) => {
  try {
    const { name, email, nic, password, bankAccountNumber } = req.body;

    // Check if the bank account number is provided
    if (!bankAccountNumber) {
      return res
        .status(400)
        .json({ message: 'Bank account number is required' });
    }

    console.log(bankAccountNumber, nic);

    // Check if the bank account number exists in the bank accounts collection with the same NIC
    const bankAccountExists = await BankAccount.findOne({
      account_number: bankAccountNumber,
      nic: nic,
    });

    if (!bankAccountExists) {
      return res
        .status(400)
        .json({ message: 'Invalid Bank Account Number or NIC' });
    }

    // Check if bank account number is already associated with an existing user
    const existingUserWithAccount = await User.findOne({
      account_number: bankAccountNumber,
    });
    if (existingUserWithAccount) {
      return res
        .status(400)
        .json({ message: 'Bank account number already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      name,
      email,
      nic,
      password: hashedPassword,
      balance: bankAccountExists.balance,
      bankAccountNumber,
    });

    // Save the user to the database
    await user.save();

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
    const token = jwt.sign({ userId: user._id }, JWT_SECRET_KEY, {
      expiresIn: '1h',
    });
    // Send the token as a cookie
    console.log('Setting cookies...');
    res
      .cookie('token', token, { httpOnly: true, secure: false, sameSite: 'none'})
      .cookie('tokenExists', 'true', { httpOnly: false, secure: false, sameSite: 'none'});
    console.log('Cookies set');
    // Respond with a success message
    res.json({
      message: 'Login successful',
      token,
      user: { id: user._id, name: user.name },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.checkAuth = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    res.clearCookie('tokenExists');
    return res.json({ isAuthenticated: false });
  }

  try {
    jwt.verify(token, JWT_SECRET_KEY);
    res.cookie('tokenExists', 'true', { httpOnly: false });
    return res.json({ isAuthenticated: true });
  } catch (error) {
    console.log('authControllers.checkAuth error:', error);
    res.clearCookie('tokenExists');
    console.error('An error occurred:', error);
    return res.json({ isAuthenticated: false });
  }
};
