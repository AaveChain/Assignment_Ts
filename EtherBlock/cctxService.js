const cctx = require('ccxt');

async function getTradableCoins() {
  const exchange = new cctx.binance();
  const markets = await exchange.load_markets();
  const coins = Object.keys(markets);
  return coins;
}

async function getCoinAveragePrice(coinSymbol) {
  const exchange = new cctx.binance();
  const ticker = await exchange.fetchTicker(coinSymbol);
  return ticker.last;
}

module.exports = {
  getTradableCoins,
  getCoinAveragePrice,
};
