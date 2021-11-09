'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.valsArr = [];
    this.max = 0;
  }

  maxValue() {
    if (!this.root) {
      throw new Error('Binary tree is empty.');
    }
    this.findMax(this.root);
    return this.max;
  }

  findMax(current) {
    try {
      if (current.value > this.max) {
        this.max = current.value;
      } 
      if (current.left) {
        this.findMax(current.left);
      }
      if (current.right) {
        this.findMax(current.right);
      }
    } catch (error) {
      throw new Error('Cannot find max value.');
    }
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

// let tree = new BinaryTree();

// tree.root = new Node('2');
// tree.root.left = new Node('7');
// tree.root.left.left = new Node('2');
// tree.root.left.right = new Node('6');
// tree.root.left.right.left = new Node('5');
// tree.root.left.right.right = new Node('11');
// tree.root.right = new Node('5');
// tree.root.right.right = new Node('9');
// tree.root.right.right.left = new Node('4');

module.exports = {
  Node,
  BinaryTree
};
