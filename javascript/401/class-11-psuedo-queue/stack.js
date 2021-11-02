'use strict';

const Node = require('./node.js')

class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
    let temp = this.top;
    let node = new Node(val);
    node.next = temp;
    this.top = node;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error ('Stack is empty');
    }
    let temp = this.top;
    this.top = temp.next;
    return temp.val;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error ('Stack is empty');
    }
    return this.top.val;
  }

  isEmpty() {
    if (!this.top) {
      return true;
    }
    return false;
  }
}

module.exports = Stack;
