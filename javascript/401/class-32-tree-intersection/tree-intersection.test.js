'use strict';

const repeatedWord = require('./tree-intersection.js');

xdescribe('Testing Tree Intersection', () => {
  it('Should find common values in 2 binary trees.', () => {
    const bt1 = new BinaryTree();
    bt1.root = new Node(150);
    bt1.root.left = new Node(100);
    bt1.root.left.left = new Node(75);
    bt1.root.left.right = new Node(160);
    bt1.root.left.right.left = new Node(125);
    bt1.root.left.right.right = new Node(175);
    bt1.root.right = new Node(250);
    bt1.root.right.left = new Node(200);
    bt1.root.right.right = new Node(350);
    bt1.root.right.right.left = new Node(300);
    bt1.root.right.right.right = new Node(500);

    const bt2 = new BinaryTree();
    bt2.root = new Node(42);
    bt2.root.left = new Node(100);
    bt2.root.left.left = new Node(15);
    bt2.root.left.right = new Node(160);
    bt2.root.left.right.left = new Node(125);
    bt2.root.left.right.right = new Node(175);
    bt2.root.right = new Node(600);
    bt2.root.right.left = new Node(200);
    bt2.root.right.right = new Node(350);
    bt2.root.right.right.left = new Node(4);
    bt2.root.right.right.right = new Node(500);

    expect(treeIntersection(bt1, bt2)).toEqual([100, 160, 125, 175, 200, 350, 500]);
  });

  it('Should return an empty array if no values are repeated', () => {
    const bt1 = new BinaryTree();
    bt1.root = new Node(150);
    bt1.root.left = new Node(100);
    bt1.root.right = new Node(250);

    const bt2 = new BinaryTree();
    bt2.root = new Node(42);
    bt2.root.left = new Node(15);
    bt2.root.right = new Node(600);

    expect(treeIntersection(bt2, bt2)).toEqual([]);
  });
});
