const express = require('express');
const cctxController = require('./cctxController.js');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/api/coins/tradable', cctxController.getTradableCoins);
app.get('/api/coins/average-price', cctxController.getCoinAveragePrice);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
