'use strict';

const { Node, LinkedList } = require('./linked-list.js');

xdescribe('Testing linked list', () => {
  it('Where k is greater than the length of the linked list', () => {
    const list = new LinkedList();
    // expect(list.head).toBe(null);
  });

  it('Where k and the length of the list are the same', () => {
    const list = new LinkedList();
    // list.insert(1);
    // expect(list.head.val).toBe(1);
  });

  it('Where k is not a positive integer', () => {
    const list = new LinkedList();
    // list.head = new Node(1);
    // expect(list.head.val).toBe(1);
  });

  it('Where the linked list is of a size 1', () => {
    const list = new LinkedList();
    // list.head = new Node(1);
    // list.insert(10);
    // expect(list.head.val).toBe(10);
  });

  it('Happy Path where k is not at the end, but somewhere in the middle of the linked list', () => {
    const list = new LinkedList();
    // list.head = new Node(1);
    // expect(list.includes(1)).toBe(true);
  });
});
