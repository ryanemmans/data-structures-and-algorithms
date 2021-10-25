'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(val) {
    try {
      let newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
    } catch (error) {
      console.log('Could not insert new node to head.', error);
    }
  }

  includes(val) {
    try {
      let current = this.head;
      while (current) {
        if (current.val === val) {
          return true;
        }
        current = current.next;
      }
      return false;
    } catch (error) {
      console.log('Could not check for value in list.', error);
    }
  }

  toString() {
    try {
      let current = this.head;
      let str = '';
      while (current) {
        str += `{ ${current.val} } -> `;
        current = current.next;
      }
      return str += 'NULL';
    } catch (error) {
      console.log('Could not return string.', error);
    }
  }
}

module.exports = {
  Node,
  LinkedList
};
