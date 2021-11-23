'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function fizzBuzzTree(kary) {
  if (!kary.root) {
    return;
  }
  let queue = [];
  queue.unshift(kary.root);

  while (queue.length > 0) {
    let front = queue.pop();
    front.value = findValues(front.value);

    for (let i = 0; i < front.children.length; i++) {
      queue.unshift(front.children[i]);
    }
  }
}

function findValues(num) {
  if (num % 3 === 0) {
    if (num % 5 === 0) {
      return 'FizzBuzz';
    }
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else {
    return num.toString();
  }
}

module.exports = {
  Node,
  fizzBuzzTree,
};
