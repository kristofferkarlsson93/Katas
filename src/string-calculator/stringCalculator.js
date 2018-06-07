// http://osherove.com/tdd-kata-1/

module.exports = function add (string) {
  if (!string.length) {
    return 0;
  }
  const numbers = stringToArray(string);
  let result = 0;
  numbers.forEach(number => {
    const parsedNumber = parseInt(number);
    if (number >= 0) {
      result += parsedNumber
    } else {
      throw Error();
    }
  });
  return result;
};

function stringToArray(string) {
  return string.split(/\s/);
}