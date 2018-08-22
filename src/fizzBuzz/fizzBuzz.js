module.exports.forNumber = number => {
  if (!number) {
    throw Error("No number provided");
  }
  if (number.isDivisibleBy(5) || number.containsNumber(5)) {
    return "Buzz";
  } else if (number.isDivisibleBy(3) || number.containsNumber(3)) {
    return "Fizz";
  }
  return number.toString();
};

Number.prototype.containsNumber = function(number) {
  return (
    this.valueOf()
      .toString()
      .indexOf(number) > -1
  );
};

Number.prototype.isDivisibleBy = function(divider) {
  return this.valueOf() % divider === 0;
};
