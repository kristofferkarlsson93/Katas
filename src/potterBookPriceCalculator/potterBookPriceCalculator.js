module.exports.bookPrice = 8;

module.exports.calculate = purchase => {
  if (!Array.isArray(purchase)) {
    throw Error('Bad input');
  }
  let priceUnitsToPay = 1;
  if (purchase.length === 2) {
    priceUnitsToPay = 1 - 0.05;
  } else if (purchase.length === 3) {
    priceUnitsToPay = 1 - 0.1;
  } else if (purchase.length === 4) {
    priceUnitsToPay = 1 - 0.2;
  } else if (purchase.length === 5) {
    priceUnitsToPay = 1 - 0.25;
  }
  return this.bookPrice * purchase.length * priceUnitsToPay;
};
