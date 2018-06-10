// http://osherove.com/tdd-kata-1/

module.exports = function add (string) {
  guardAgainstInvalidNumbers(string)
  const numbers = stringToArray(string);
  let result = 0;
  numbers.forEach(number => {
    const parsedNumber = parseInt(number);    
    if (number <= 1000 && !isNaN(parsedNumber)) {
      result += parsedNumber
    }
  });
  return result;
};

function guardAgainstInvalidNumbers(string) {
  if (string.indexOf('-') > -1) {
    throwInvalidNumbers(string);
  }
}

function throwInvalidNumbers(string) {
  throw new Error('Invalid numbers ' + string.match(/(-).*/g));
}

function stringToArray(string) {
  return string.split(/[\n ,]+/); 
}