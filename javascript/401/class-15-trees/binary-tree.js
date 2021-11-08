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

class BinarySearchTree extends BinaryTree {
  add(value) {
    try {
      if (!this.root) {
        this.root = new Node(value);
        return;
      }
      
      let current = this.root;
      while (current) {
        if (current.value > value) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = new Node(value);
            return;
          }
        } else {
          if (current.right) {
            current = current.right;
          } else {
            current.right = new Node(value);
            return;
          }
          current = current.left;
        }
      }
    } catch (error) {
      throw new Error('Cannot add new node.');
    }
  }

  contains(value) {
    try {
      let current = this.root;

      while (current) {
        if (current.value === value) {
          return true;
        } else if (current.value < value) {
          current = current.right;
        } else {
          current = current.left;
        }
      }
      return false;
    } catch (error) {
      throw new Error('Cannot check for value.')
    }
  }
}

module.exports = {
  Node,
  BinaryTree
};
