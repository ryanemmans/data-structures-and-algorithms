'use strict';

const repeatedWord = require('./hashmap-repeated-word.js');

describe('Testing Hashmap Repeated Word', () => {
  it('Should return the first word to occur more than once in a string.', () => {
    let str1 = 'Once upon a time, there was a brave princess who.';
    let str2 = 'It was the best of times, it was the worst of times, it was the age of wisdom.';
    let str3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York.';

    expect(repeatedWord(str1)).toBe('a');
    expect(repeatedWord(str2)).toBe('it');
    expect(repeatedWord(str3)).toBe('summer');
  });
});
