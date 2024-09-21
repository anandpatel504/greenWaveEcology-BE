const flowerModel = require('../models/flowerModel');

const getAllFlowers = (req, res) => {
  const flowers = flowerModel.getAllFlowers();
  res.json(flowers);
};

const getFlowerById = (req, res) => {
  const flower = flowerModel.getFlowerById(req.params.id);
  if (!flower) {
    return res.status(404).json({ message: 'Flower not found' });
  }
  res.json(flower);
};

module.exports = { getAllFlowers, getFlowerById };
