const userModel = require('../models/userModel');

const getUserDetails = (req, res) => {
  const user = userModel.getUserById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};

const saveUserDetails = (req, res) => {
  const newUser = userModel.saveUserDetails(req.body);
  res.status(201).json(newUser);
};

module.exports = { getUserDetails, saveUserDetails };
