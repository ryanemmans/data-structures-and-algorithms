'use strict';

const { Stack } = require('./stack-and-queue.js');

describe('Testing the Stack', () => {
  it('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push(5);
    expect(JSON.stringify(stack)).toStrictEqual('{"top":{"val":5,"next":null}}');
    expect(stack.top.val).toEqual(5);
  });

  it('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.push(15);
  });

  it('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(10);
    expect(stack.pop()).toEqual(10);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.push(15);
    stack.pop();
    stack.pop();
    stack.pop();
  });

  it('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(10);
    expect(stack.peek()).toEqual(10);
  });

  it('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.top).toEqual(null);
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    const stack = new Stack();
    expect(stack.peek()).toEqual('Stack is empty');
    expect(stack.pop()).toEqual('Stack is empty');
  });
});
