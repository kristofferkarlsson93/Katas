module.exports.bookPrice = 8;
const discountModel = {
  1: 0.0,
  2: 0.05,
  3: 0.1,
  4: 0.2,
  5: 0.25
};

module.exports.calculate = purchase => {
  if (!Array.isArray(purchase)) {
    throw Error('Bad input');
  }
  const items = createItemsObject(purchase);
  const sets = getItemsAsSets(items);
  const setPrices = [];
  for (set of sets) {
    setPrices.push(getPriceForSet(set));
  }
  return setPrices.reduce((a, b) => a + b, 0);
};

const getPriceForSet = set => {
  const numberOfBooks = Object.keys(set).length;
  const priceUnitsToPay = 1 - discountModel[numberOfBooks];
  return this.bookPrice * numberOfBooks * priceUnitsToPay;
};

const createItemsObject = items => {
  const result = {};
  items.forEach(item => {
    if (result[item]) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  });
  return result;
};

const getItemsAsSets = items => {
  const result = [];
  const numberOfSets = Math.max(...Object.values(items));
  for (let set = 0; set < numberOfSets; set++) {
    const currentSet = {};
    Object.keys(items).forEach(key => {
      if (items[key] > 0 && !currentSet[key]) {
        currentSet[key] = 1;
        items[key]--;
      }
    });
    result.push(currentSet);
  }
  return result;
};
