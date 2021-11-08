'use strict';

const { Node, BinaryTree } = require('./binary-tree.js');

describe('Testing the Binary Tree', () => {
  it('Can successfully instantiate an empty binaryTree', () => {
    const binaryTree = new BinaryTree();
    expect(binaryTree.root).toEqual(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node('10');
    expect(binaryTree.root.value).toEqual('10');
    expect(binaryTree.root.right).toEqual(null);
    expect(binaryTree.root.left).toEqual(null);
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node('10');
    binaryTree.root.left = new Node('13');
    binaryTree.root.right = new Node('2');
    expect(binaryTree.root.value).toEqual('10');
    expect(binaryTree.root.left.value).toEqual('13');
    expect(binaryTree.root.right.value).toEqual('2');
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node('10');
    binaryTree.root.left = new Node('13');
    binaryTree.root.right = new Node('2');
    binaryTree.root.left.right = new Node('50');
    binaryTree.root.right.left = new Node('45');
    expect(binaryTree.preOrder(binaryTree.root)).toEqual([ '10', '13', '50', '2', '45' ]); 
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node('10');
    binaryTree.root.left = new Node('13');
    binaryTree.root.right = new Node('2');
    binaryTree.root.left.right = new Node('50');
    binaryTree.root.right.left = new Node('45');
    expect(binaryTree.inOrder(binaryTree.root)).toEqual([ '13', '50', '10', '45', '2' ]); 
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node('10');
    binaryTree.root.left = new Node('13');
    binaryTree.root.right = new Node('2');
    binaryTree.root.left.right = new Node('50');
    binaryTree.root.right.left = new Node('45');
    expect(binaryTree.postOrder(binaryTree.root)).toEqual([ '50', '13', '45', '2', '10' ]); 
  });
});
