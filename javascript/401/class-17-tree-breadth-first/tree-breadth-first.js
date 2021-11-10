'use strict';

class Node {
  constructor(value, n = 0) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.children = new Array(n);
    [undefined, undefined];
  }
}

class BinaryTree {
  constructor(n) {
    this.n = n;
    this.root = null;
    this.valsArr = [];
  }

  preOrder(current) {
    try {
      this.valsArr.push(current.value);
      if (current.left) {
        this.preOrder(current.left);
      }
      if (current.right) {
        this.preOrder(current.right);
      }
      return this.valsArr;
    } catch (error) {
      throw new Error('Cannot pre-order.');
    }
  }

  inOrder(current) {
    try {
      if (current.left) {
        this.inOrder(current.left);
      }
      this.valsArr.push(current.value);

      if (current.right) {
        this.inOrder(current.right);
      }
      return this.valsArr;
    } catch (error) {
      throw new Error('Cannot in-order.');
    }
  }

  postOrder(current) {
    try {
      if (current.left) {
        this.postOrder(current.left);
      }
      if (current.right) {
        this.postOrder(current.right);
      }
      this.valsArr.push(current.value);
      return this.valsArr;
    } catch (error) {
      throw new Error('Cannot post-order.');
    }
  }
}

function breadthFirst(root) {
  if (!root) {
    return;
  }
  const queue = [];
  let result = [];

  let current = root;
  queue.unshift(root);

  while (queue.length) {
    current = queue.pop();
    result.push(current.value);
    for (let node of current.children) {
      queue.unshift(node);
    }
  }
  return result;
}

module.exports = {
  Node,
  BinaryTree,
  breadthFirst
};
