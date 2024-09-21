const express = require('express');
const app = express();
const morgan = require("morgan");
const port = 4000;

const flowerRoutes = require('./flower-shop-api/routes/flowerRoutes');
const userRoutes = require('./flower-shop-api/routes/userRoutes');
const cartRoutes = require('./flower-shop-api/routes/cartRoutes');
const authRoutes = require('./flower-shop-api/routes/authRoutes');
const authenticateToken = require('./flower-shop-api/auth/authMiddleware');

// Middleware to parse JSON
app.use(express.json());
app.use(morgan("dev"));

// Public routes
app.use('/flowers', flowerRoutes);
app.use('/auth', authRoutes); // Authentication routes

// Protected routes
app.use('/users', authenticateToken, userRoutes);
app.use('/cart', authenticateToken, cartRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
