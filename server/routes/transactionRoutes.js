// routes/transactionRoutes.js
const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const authMiddleware = require('../middleware/authMiddleware');

// Transfer funds (requires authentication)
router.post('/transfer', authMiddleware, transactionController.transferFunds);

module.exports = router;
