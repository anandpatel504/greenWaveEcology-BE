let cart = require('../data/cart.json');

const addToCart = (item) => {
  cart.items.push(item);
  return cart;
};

const orderPlaced = () => {
  cart.items = [];  // Empty the cart after placing the order
  return { message: "Order placed successfully!" };
};

module.exports = { addToCart, orderPlaced };
