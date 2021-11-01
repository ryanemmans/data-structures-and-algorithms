'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

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
    if (!this.top) {
      return 'Stack is empty';
    }
    let temp = this.top;
    this.top = temp.next;
    return temp.val;
  }

  peek() {
    if (!this.top) {
      return 'Stack is empty';
    }
    return this.top.val;
  }

  isEmpty() {
    return this.top = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(val) {
    let node = new Node(val)
    if (this.back && this.front) {
      this.back.next = node;
      this.back = node;
    } else {
      this.front = node;
      this.back = node;
    }
  }

  dequeue() {
    if (!this.front) {
      return 'Queue is empty';
    } else if (this.front === this.back) {
      this.back = null;
    }
    let temp = this.front;
    this.front = temp.next;
    if (this.rear = temp) {
      this.rear = temp.next;
    }
    return temp.val;
  }

  peek() {
    if (!this.front) {
      return 'Queue is empty';
    }
    return this.front.val;
  }

  isEmpty() {
    return this.front = null;
  }
}

module.exports = {
  Stack,
  Queue
};
