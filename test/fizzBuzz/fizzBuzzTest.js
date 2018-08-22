const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const fizzBuzz = require('../../src/fizzBuzz/fizzBuzz');

describe('FizzBuzz', () => {
  
  it('throws if no number is provided', () => {
    should.throw(() => fizzBuzz.forNumber(), Error, 'd')
  })

  it('returns "Buzz" if the number is divisible by 5, or has 5 in it', () => {
    fizzBuzz.forNumber(5).should.equal('Buzz');
    fizzBuzz.forNumber(10).should.equal('Buzz');
    fizzBuzz.forNumber(52 ).should.equal('Buzz');
    fizzBuzz.forNumber(15000).should.equal('Buzz');
  })

  it('returns fizz if the number is divisible by 3, or has 3 in it', () => {
    fizzBuzz.forNumber(3).should.equal('Fizz')
    fizzBuzz.forNumber(6).should.equal('Fizz')
    fizzBuzz.forNumber(32).should.equal('Fizz')
    fizzBuzz.forNumber(33333).should.equal('Fizz')
  })

  it ('returns the number if the number is not divisible by 3 or 5', () => {
    fizzBuzz.forNumber(2).should.equal('2');
  })

});