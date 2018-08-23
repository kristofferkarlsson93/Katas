const chai = require('chai');
const should = chai.should();
const potterBookPriceCalculator = require('../../src/potterBookPriceCalculator/potterBookPriceCalculator');
const bookPrice = potterBookPriceCalculator.bookPrice;

describe('PotterBookPriceCalculator', () => {
  it('throws if given input is other than array', () => {
    should.throw(
      () => potterBookPriceCalculator.calculate('bad'),
      Error,
      'Bad input'
    );
  });

  it('returns the price with no discount if one book is bought', () => {
    potterBookPriceCalculator.calculate(['first book']).should.equal(bookPrice);
  });

  it('returns the price with 5% discount if 2 unique books are bought', () => {
    const books = ['first book', 'second book'];
    potterBookPriceCalculator
      .calculate(books)
      .should.equal(bookPrice * 2 * 0.95);
  });

  it('returns the price with 10% discount if 3 unique books are bought', () => {
    const books = ['first book', 'second book', 'third book'];
    potterBookPriceCalculator
      .calculate(books)
      .should.equal(bookPrice * 3 * 0.9);
  });

  it('returns the price with 20% discount if 4 unique books are bought', () => {
    const books = ['first book', 'second book', 'third book', 'forth book'];
    potterBookPriceCalculator
      .calculate(books)
      .should.equal(bookPrice * 4 * 0.8);
  });

  it('returns the price with 25% discount if 5 unique books are bought', () => {
    const books = [
      'first book',
      'second book',
      'third book',
      'forth book',
      'fifth book'
    ];
    potterBookPriceCalculator
      .calculate(books)
      .should.equal(bookPrice * 5 * 0.75);
  });

  it('should not be any discount if two of the same book is bought', () => {
    const books = ['first book', 'first book'];
    potterBookPriceCalculator.calculate(books).should.equal(bookPrice * 2);
  });
});
