'use strict';

const { Node, LinkedList } = require('./linked-list.js');

xdescribe('Testing linked list', () => {
  it('Can successfully add a node to the end of the linked list', () => {
    const list = new LinkedList();
    // expect(list.head).toBe(null);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    const list = new LinkedList();
    // list.insert(1);
    // expect(list.head.val).toBe(1);
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const list = new LinkedList();
    // list.head = new Node(1);
    // expect(list.head.val).toBe(1);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    const list = new LinkedList();
    // list.head = new Node(1);
    // list.insert(10);
    // expect(list.head.val).toBe(10);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    const list = new LinkedList();
    // list.head = new Node(1);
    // expect(list.includes(1)).toBe(true);
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    const list = new LinkedList();
    // list.head = new Node(1);
    // expect(list.includes(2)).toBe(false);
  });

  // it('Can properly return a collection of all the values that exist in the linked list', () => {
  //   const list = new LinkedList();
  //   list.insert(4);
  //   list.insert(3);
  //   list.insert(2);
  //   list.insert(1);
  //   expect(list.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> NULL');
  // });
});
