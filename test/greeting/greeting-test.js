const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const greet = require('../../src/greeting/greeting');

describe('greet', () => {
  it('Returns "Hello, Kristoffer when provided "Kristoffer as parameter"', () => {
    greet('Kristoffer').should.equal('Hello, Kristoffer.');
  })

  it('Returns the greeting plus the name of the person, regardles of name', () => {
    greet('Anders').should.equal('Hello, Anders.');
    greet('Gun-Britt').should.equal('Hello, Gun-Britt.');
    greet('Inga-Maj').should.equal('Hello, Inga-Maj.');
  })
  it('Returns a fallback answer when no name is provided', () => {
    greet().should.equal('Hello, my friend.');
  })
  it('Returns the greeting in all capitals if name is in capital', () => {
    greet('PER').should.equal('HELLO, PER!')
  })
  it('Greets two persons if an array of two names is given', () => {
    greet(['Lisa', 'Kristoffer']).should.equal('Hello, Lisa and Kristoffer.');
  })
  it('Greets all names in an array', () => {
    greet(['Lisa', 'Kristoffer', 'Anna-Karin', 'Kalle', 'Sven'])
      .should.equal('Hello, Lisa, Kristoffer, Anna-Karin, Kalle, and Sven.')
  })
  it('Separates shoutíngs and normal greetings', () => {
    greet(['Kristoffer', 'Sigvard', 'RUSKPRICK'])
      .should.equal('Hello, Kristoffer and Sigvard. AND HELLO, RUSKPRICK!');
  })
})