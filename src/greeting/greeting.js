// https://github.com/testdouble/contributing-tests/wiki/Greeting-Kata

module.exports = function greet(referer) {
  if (!referer) {
    return 'Hello, my friend.';
  }
  let greeting = 'Hello, ';
  let greetingToShouter = ' AND HELLO, '
  if (!Array.isArray(referer)) {
    referer = referer.split(', ');
  }
  let allNames = [];
  referer.forEach(name => {
    if (name.indexOf(', ') > -1) {
      allNames = allNames.concat(name.split(', '));
    } else allNames.push(name);
  });
  const normal = [];
  const shouters = [];
  allNames.forEach(name => {
    name === name.toUpperCase() ? shouters.push(name) : normal.push(name)
  });
  const normalNameString = createNameStringFromArray(normal);
  const shoutingNameString = createNameStringFromArray(shouters);
  const normalGreeting = normalNameString ? greeting + normalNameString + '.' : '';
  let shoutedGreeting = ''
  if (normalGreeting) {
    shoutedGreeting = shoutingNameString.length ? greetingToShouter + shoutingNameString + '!' : '';
  } else shoutedGreeting = shoutingNameString.length ? 'HELLO, ' + shoutingNameString + '!' : '';

  return normalGreeting + shoutedGreeting;
}

function createNameStringFromArray(array) {
  if (array.length === 1) {
    return array[0];
  }
  const lastName = array.length - 1;
  if (array.length === 2) {
    return array.join(' and ');
  } else {
    return array.map((name, index) => {
      return index === lastName ? 'and ' + name : name;
    }).join(', ');
  }
}

function shoutGreeting(message) {
  return message.toUpperCase() + '!';
}