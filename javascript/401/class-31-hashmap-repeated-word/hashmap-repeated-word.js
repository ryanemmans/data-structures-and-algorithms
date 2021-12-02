'use strict';

function repeatedWord(str) {
  const word = str.split(/[ .,-:;!?]+/);
  let map = new Set();

  for (let i = 0; i < word.length; i ++) {
    if (map.has(word[i].toLowerCase())) {
      return word[i].toLowerCase();
    } else {
      map.add(word[i].toLowerCase());
    }
  }
  return null;
}

module.exports = repeatedWord;