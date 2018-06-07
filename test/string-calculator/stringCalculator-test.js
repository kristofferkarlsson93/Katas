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

  it('Returns the sum of given numbers even if they are separated with new line', () => {
    add('2\n6 4').should.equal(12);
  })

  it('Throws an error if the string contains negative numbers', () => {
    should.throw(() => add('2 -1'))
  })

});