'use strict';

const { Node, BinaryTree } = require('./tree-max.js');

describe('Testing the Binary Tree', () => {
  it('Can successfully find the max value in the binary tree', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node(2);
    binaryTree.root.left = new Node(7);
    binaryTree.root.left.left = new Node(2);
    binaryTree.root.left.right = new Node(6);
    binaryTree.root.left.right.left = new Node(5);
    binaryTree.root.left.right.right = new Node(11);
    binaryTree.root.right = new Node(5);
    binaryTree.root.right.right = new Node(9);
    binaryTree.root.right.right.left = new Node(4);
    expect(binaryTree.maxValue()).toEqual(11);
  });

  it('Can successfully instantiate an empty binary tree', () => {
    const binaryTree = new BinaryTree();
    expect(binaryTree.root).toEqual(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node(2);
    expect(binaryTree.root.value).toEqual(2);
    expect(binaryTree.root.left).toEqual(null);
    expect(binaryTree.root.right).toEqual(null);
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node(2);
    binaryTree.root.left = new Node(7);
    binaryTree.root.right = new Node(5);
    expect(binaryTree.root.value).toEqual(2);
    expect(binaryTree.root.left.value).toEqual(7);
    expect(binaryTree.root.right.value).toEqual(5);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node(2);
    binaryTree.root.left = new Node(7);
    binaryTree.root.right = new Node(5);
    binaryTree.root.left.right = new Node(6);
    binaryTree.root.right.right = new Node(9);
    expect(binaryTree.preOrder(binaryTree.root)).toEqual([2, 7, 6, 5, 9]);
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node(2);
    binaryTree.root.left = new Node(7);
    binaryTree.root.right = new Node(5);
    binaryTree.root.left.right = new Node(6);
    binaryTree.root.right.right = new Node(9);
    expect(binaryTree.inOrder(binaryTree.root)).toEqual([7, 6, 2, 5, 9]);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node(2);
    binaryTree.root.left = new Node(7);
    binaryTree.root.right = new Node(5);
    binaryTree.root.left.right = new Node(6);
    binaryTree.root.right.right = new Node(9);
    expect(binaryTree.postOrder(binaryTree.root)).toEqual([6, 7, 9, 5, 2]);
  });
});
