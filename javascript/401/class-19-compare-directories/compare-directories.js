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
}

class CompareDirectories {
  constructor(tree) {
    this.tree = tree;
    this.sum = 0;
  }

  preOrder(node) {
    if (!this.tree) {
      return;
    }
    console.log(node.value);
    if (node.value === 'file') {
      this.sum++;
    }
    if (node.left) {
      this.preOrder(node.left);
    }
    if (node.right) {
      this.preOrder(node.right);
    }
    
    console.log(node2.value);
    if (node2.value === 'file') {
      this.sum++;
    }
    if (node2.left) {
      this.preOrder(node2.left);
    }
    if (node2.right) {
      this.preOrder(node2.right);
    }
  };
}

const a = new Node('folder')
const b = new Node('file')
const c = new Node('file')
const binaryTree1 = new BinaryTree()
binaryTree1.root = a
a.left = b
a.right = c

const d = new Node('folder')
const e = new Node('file')
const f = new Node('file')
// const g = new Node('file')
const binaryTree2 = new BinaryTree()
binaryTree2.root = d
d.left = e
d.right = f
// f.left = g

const compare = new CompareDirectories(binaryTree1, binaryTree2);
compare.preOrder(binaryTree1.root, binaryTree2.root);
console.log(compare.sum);
