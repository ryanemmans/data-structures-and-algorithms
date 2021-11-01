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

    function reverseList(list) {
      let current = list.head;
      let next = null;
      let previous = null;

      while (current) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
      }
      return list;
    }

    reverseList();
  }

  // append(val) {

  // }

  // insertBefore(val) {

  // }

  // insertAfter() {

  // }

  // kthFromEnd(k) {

  // }

  // zipLists(list1, list2) {

  // }

module.exports = {
  Node,
  LinkedList
};
