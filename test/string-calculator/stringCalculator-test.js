const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const add = require('../../src/string-calculator/stringCalculator');

describe('StringCalculator', () => {
  it('Should return 0 if no values are given in the string', () => {
    add('').should.equal(0);
  })
  
  it('Returns the value as an int', () => {
    add('2').should.equal(2);
  })
  
  it('Returns the sum of two numbers in a string', () => {
    add('2 2').should.equal(4);
  });

  it('Returns the sum of multiple numbers in a string', () => {
    add('2 4 6 8 1').should.equal(21);
  });

  it('Returns the sum of given numbers even if they are separated by new line or comma', () => {
    add('2\n6 4,2').should.equal(14);
  })

  it('Throws an error if the string contains negative numbers', () => {
    should.throw(() => add('2 -1'))
  })

  it('Throws an error containing the invalid numbers in message when string contains negative numbers', () => {
    should.throw(() => add('2 -1 -3'), Error, 'Invalid numbers -1 -3');
  })

  it('Ignores numbers greater than 1000', () => {
    add('10,20,1001').should.equal(30);
  })

  it('Do handles the threshold value',() => {
    add('10 1000').should.equal(1010);
  })

});