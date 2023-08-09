const cctxService = require('./cctxService.js');

async function getTradableCoins(req, res) {
  const coins = await cctxService.getTradableCoins();
  res.json(coins);
}

async function getCoinAveragePrice(req, res) {
  const { coinSymbol } = req.query;
  const averagePrice = await cctxService.getCoinAveragePrice(coinSymbol);
  res.json({ averagePrice });
}

module.exports = {
  getTradableCoins,
  getCoinAveragePrice,
};
