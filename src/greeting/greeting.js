// https://github.com/testdouble/contributing-tests/wiki/Greeting-Kata

module.exports = function greet(referer) {
  let greeting = 'Hello, ';
  if (Array.isArray(referer)) {
    referer = createNameStringFromArray(referer);
  }
  referer = referer ? referer : 'my friend';
  let message = greeting + referer;
  if (referer === referer.toUpperCase()) {
    message = shoutGreeting(message);
  }
  return message;
}

function createNameStringFromArray (array) {
  const lastName = array.length -1;
  return array.length === 2 
    ? array.join(' and ')
    : array.map((name, index) => index === lastName ? 'and ' + name : name).join(', ');
}

/*function createNameStringFromArray(array, currentName, nameString) {
  if (array.length > 1) {
    nameString += ', ' + currentName;
    array.shift();
    return createNameStringFromArray(array, array[0], nameString);
  } else {
    nameString +=' and ' + currentName;
    nameString = nameString.replace(', ', '');
    return nameString;
  };
}*/

function shoutGreeting(message) {
  return message.toUpperCase() + '!';
}