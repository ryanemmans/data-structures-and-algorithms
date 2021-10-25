'use strict';

const { Node, LinkedList } = require('./linked-list.js');

describe('Testing linked list', () => {
  it('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toBe(null);
  });

  it('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert(1);
    expect(list.head.val).toBe(1);
  });

  it('Will properly point to the first node in the linked list from the head property', () => {
    const list = new LinkedList();
    list.head = new Node(1);
    expect(list.head.val).toBe(1);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    list.head = new Node(1);
    list.insert(10);
    expect(list.head.val).toBe(10);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList();
    list.head = new Node(1);
    expect(list.includes(1)).toBe(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const list = new LinkedList();
    list.head = new Node(1);
    expect(list.includes(2)).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const list = new LinkedList();
    list.insert(4);
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> NULL');
  });
});
