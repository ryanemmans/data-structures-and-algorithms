const Stack = require('./stack.js')

class PseudoQueue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  enqueue(val) {
    this.stackOne.push(val);
  }

  dequeue() {
    if (this.stackOne.isEmpty() && this.stackTwo.isEmpty()) {
      throw new Error('Queue is Empty.');
    }

    if (this.stackTwo.isEmpty()) {
      while (!this.stackOne.isEmpty()) {
        this.stackTwo.push(this.stackOne.top.val);
        this.stackOne.pop();
      }
    }

    let stackTwoTop = this.stackTwo.top.val;
    this.stackTwo.pop();
    return stackTwoTop;
  }

  getStackOne() {
    return this.stackOne.top;
  }

  getStackTwo() {
    return this.stackTwo.top;
  }
}

module.exports = PseudoQueue;