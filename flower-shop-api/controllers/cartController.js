const cartModel = require('../models/cartModel');

const addToCart = (req, res) => {
  const item = req.body;
  const updatedCart = cartModel.addToCart(item);
  res.status(201).json(updatedCart);
};

const orderPlaced = (req, res) => {
  const message = cartModel.orderPlaced();
  res.json(message);
};

module.exports = { addToCart, orderPlaced };
