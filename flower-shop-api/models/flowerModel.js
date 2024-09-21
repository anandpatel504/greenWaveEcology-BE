const flowers = require('../data/flowers.json');

const getAllFlowers = () => {
  return flowers;
};

const getFlowerById = (id) => {
  return flowers.find(flower => flower.id === parseInt(id));
};

module.exports = { getAllFlowers, getFlowerById };
