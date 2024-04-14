// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authConrollers');

// Register a new user
router.post('/register', authController.register);

// Login user
router.post('/login', authController.login);

module.exports = router;
