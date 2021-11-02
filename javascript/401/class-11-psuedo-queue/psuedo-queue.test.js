const PseudoQueue = require('./pseudo-queue.js')

let pseudoQueue = new PseudoQueue();

describe('Testing Pseudo Queue Functionality', () => {
  test('Enqueue', () => {
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(4);
    pseudoQueue.enqueue(6);
    pseudoQueue.enqueue(8);
    expect(pseudoQueue.getStackOne().val).toEqual(8);
    expect(pseudoQueue.getStackOne().next.val).toEqual(6);
    expect(pseudoQueue.getStackOne().next.next.val).toEqual(4);
    expect(pseudoQueue.getStackOne().next.next.next.val).toEqual(2);
  });

  test('Dequeue', () => {
    expect(pseudoQueue.dequeue()).toEqual(2);
    expect(pseudoQueue.dequeue()).toEqual(4);
    expect(pseudoQueue.dequeue()).toEqual(6);
    expect(pseudoQueue.getStackTwo().val).toEqual(8);
    expect(pseudoQueue.dequeue()).toEqual(8);
    expect(() => pseudoQueue.dequeue()).toThrow(new Error('Queue is Empty.'));
  });
});
