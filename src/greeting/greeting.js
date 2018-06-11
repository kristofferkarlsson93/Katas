// https://github.com/testdouble/contributing-tests/wiki/Greeting-Kata

module.exports = function greet(referer) {
  let greeting = 'Hello, ';
  referer = referer ? referer : 'my friend';
  let message = greeting + referer;
  if (referer === referer.toUpperCase()) {
    message = shoutGreeting(message);
  }
  return message;
} 

function shoutGreeting (message) {
  return message.toUpperCase() + '!';
}