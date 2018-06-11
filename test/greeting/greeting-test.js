const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const greet = require('../../src/greeting/greeting');

describe('greet', () => {
  it('Returns "Hello, Kristoffer when provided "Kristoffer as parameter"', () => {
    greet('Kristoffer').should.equal('Hello, Kristoffer');
  })

  it('Returns the greeting plus the name of the person, regardles of name', () => {
    greet('Anders').should.equal('Hello, Anders');
    greet('Gun-Britt').should.equal('Hello, Gun-Britt');
    greet('Inga-Maj').should.equal('Hello, Inga-Maj');
  })
  it('Returns a fallback answer when no name is provided', () => {
    greet().should.equal('Hello, my friend');
  })
  it('Returns the greeting in all capitals if name is in capital', () => {
    greet('PER').should.equal('HELLO, PER!')
  })
})