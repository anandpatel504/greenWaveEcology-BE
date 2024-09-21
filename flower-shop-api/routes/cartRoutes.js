const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Routes
router.post('/add', cartController.addToCart);
router.post('/order', cartController.orderPlaced);

module.exports = router;
