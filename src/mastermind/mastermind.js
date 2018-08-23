const allowedColors = ['yellow', 'green', 'red', 'blue'];

module.exports.evaluate = guess => {
  guardAgainstInvalidInput(guess);
  const guessResult = this.board.reduce(
    (result, currentValue, index) => {
      guardAgainstInvalidColor(guess[index]);
      valuesMatch(currentValue, guess[index])
        ? result.correct++
        : result.wrong++;
      return result;
    },
    { correct: 0, wrong: 0 }
  );
  if (guess.length > this.board.length) {
    guessResult.wrong += guess.length - this.board.length;
  }
  return guessResult;
};

const valuesMatch = (value1, value2) => value1 === value2;

const guardAgainstInvalidInput = input => {
  if (!Array.isArray(input)) {
    throw Error('Invalid input');
  }
};

const guardAgainstInvalidColor = color => {
  if (color && !allowedColors.includes(color)) {
    throw Error('Invalid color ' + color);
  }
};

module.exports.setBoard = newBoard => (this.board = newBoard);
