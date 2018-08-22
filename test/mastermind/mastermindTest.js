const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const mastermind = require('../../src/mastermind/mastermind');

describe('Mastermind', () => {
  it('should throw if given input is not an array', () => {
    should.throw(() => mastermind.evaluate('yellow'));
  });

  it('should return an object with correct keys', () => {
    mastermind.setBoard(['yellow', 'green', 'red', 'blue']);
    const result = mastermind.evaluate(['yellow', 'green']);
    result.should.have.property('correct');
    result.should.have.property('wrong');
  });

  it('should return the correct amount of correct guesses', () => {
    mastermind.setBoard(['yellow', 'green', 'red', 'blue']);
    mastermind
      .evaluate(['green', 'green', 'red', 'blue'])
      .correct.should.equal(3);
    mastermind
      .evaluate(['green', 'green', 'blue', 'red'])
      .correct.should.equal(1);
  });

  it('should return the correct amount of wrong guesses', () => {
    mastermind.setBoard(['yellow', 'green', 'red', 'blue']);
    mastermind
      .evaluate(['green', 'green', 'red', 'blue'])
      .wrong.should.equal(1);
    mastermind.evaluate(['yellow', 'red', 'red', 'red']).wrong.should.equal(2);
  });

  it('counts every missing value as a "wrong"', () => {
    mastermind.setBoard(['yellow', 'green', 'red', 'blue']);
    mastermind.evaluate(['yellow', 'white']).wrong.should.equal(3);
  });

  it('counts every value outside of the boards bounds as wrong', () => {
    mastermind.setBoard(['yellow', 'green', 'red', 'blue']);
    mastermind
      .evaluate(['yellow', 'green', 'red', 'red', 'yellow', 'green'])
      .wrong.should.equal(3);
    mastermind
      .evaluate([
        'yellow',
        'green',
        'red',
        'red',
        'yellow',
        'green',
        'yellow',
        'green'
      ])
      .wrong.should.equal(5);
  });
});
