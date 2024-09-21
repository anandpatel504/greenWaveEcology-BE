const express = require('express');
const router = express.Router();
const flowerController = require('../controllers/flowerController');

// Routes
router.get('/', flowerController.getAllFlowers);
router.get('/:id', flowerController.getFlowerById);

module.exports = router;
