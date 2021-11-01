'use strict';

const { Queue } = require('./stack-and-queue.js');

describe('Testing the Queue', () => {
  it('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue(5);
    expect(queue.front.val).toEqual(5);
    expect(queue.back.val).toEqual(5);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);
    expect(queue.front.val).toEqual(5);
    expect(queue.back.val).toEqual(15);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);
    expect(queue.dequeue()).toEqual(5);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);
    expect(queue.peek()).toEqual(5);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toEqual(null);
    expect(queue.back).toEqual(null);
  });

  it('Can successfully instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.front).toEqual(null);
    expect(queue.back).toEqual(null);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    const queue = new Queue();
    expect(queue.peek()).toEqual('Queue is empty');
    expect(queue.dequeue()).toEqual('Queue is empty');
  });
});
