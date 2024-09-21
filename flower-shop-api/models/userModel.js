const bcrypt = require('bcryptjs');
const users = require('../data/users.json');
const fs = require('fs');
const path = require('path');

// Helper function to save users to the JSON file
const saveUsersToFile = (usersData) => {
  const usersFilePath = path.join(__dirname, '../data/users.json');
  fs.writeFileSync(usersFilePath, JSON.stringify(usersData, null, 2));
};

const getUserByEmail = (email) => {
  return users.find(user => user.email === email);
};

const getUserById = (id) => {
    console.log(id, "id")
  return users.find(user => user.id === parseInt(id));
};

const saveUserDetails = (userDetails) => {
  users.push(userDetails);
  saveUsersToFile(users);
  return userDetails;
};

const signupUser = async (name, email, password) => {
  const existingUser = getUserByEmail(email);
  if (existingUser) {
    throw new Error('User already exists with this email');
  }
  
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: hashedPassword
  };

  saveUserDetails(newUser);
  return newUser;
};

const loginUser = async (email, password) => {
  const user = getUserByEmail(email);
  if (!user) {
    throw new Error('Invalid email or password');
  }

//   const isPasswordValid = await bcrypt.compare(password, user.password);
//   if (!isPasswordValid) {
//     throw new Error('Invalid email or password');
//   }

  // Check if entered password matches stored password (in plain text)
  if (password !== user.password) {
    throw new Error('Invalid email or password');
  }

  return user;
};

module.exports = { getUserByEmail, getUserById, saveUserDetails, signupUser, loginUser };
