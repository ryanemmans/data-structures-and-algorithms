'use strict';

const { Node, fizzBuzzTree } = require('./tree-fizz-buzz.js');

describe('Testing the FizzBuzz Tree', () => {
  it('Should replace values divisible by 3 with Fizz.', () => {
    const kary = {root: null}
    kary.root = new Node(1);
    kary.root.children.push(new Node(2), new Node(3));
    kary.root.children[0].children.push(new Node(4), new Node(5), new Node(6));
    kary.root.children[0].children[0].children.push(new Node(8), new Node(9));
    kary.root.children[1].children.push(new Node(7));
    kary.root.children[1].children[0].children.push(new Node(10), new Node(11));
    kary.root.children[1].children[0].children[0].children.push(new Node(12));
    kary.root.children[1].children[0].children[1].children.push(new Node(13), new Node(14), new Node(15));

    fizzBuzzTree(kary);

    expect(kary.root.children[1].value).toEqual('Fizz');
    expect(kary.root.children[0].children[2].value).toEqual('Fizz');
    expect(kary.root.children[0].children[0].children[1].value).toEqual('Fizz');
    expect(kary.root.children[1].children[0].children[0].children[0].value).toEqual('Fizz');
  });

  it('Should replace values divisible by 5 with Buzz.', () => {
    const kary = {root: null}
    kary.root = new Node(1);
    kary.root.children.push(new Node(2), new Node(3));
    kary.root.children[0].children.push(new Node(4), new Node(5), new Node(6));
    kary.root.children[0].children[0].children.push(new Node(8), new Node(9));
    kary.root.children[1].children.push(new Node(7));
    kary.root.children[1].children[0].children.push(new Node(10), new Node(11));
    kary.root.children[1].children[0].children[0].children.push(new Node(12));
    kary.root.children[1].children[0].children[1].children.push(new Node(13), new Node(14), new Node(15));

    fizzBuzzTree(kary);

    expect(kary.root.children[0].children[1].value).toEqual('Buzz');
    expect(kary.root.children[1].children[0].children[0].value).toEqual('Buzz');
  });

  it('Should replace values divisible by both 3 and 5 with FizzBuzz.', () => {
    const kary = {root: null}
    kary.root = new Node(1);
    kary.root.children.push(new Node(2), new Node(3));
    kary.root.children[0].children.push(new Node(4), new Node(5), new Node(6));
    kary.root.children[0].children[0].children.push(new Node(8), new Node(9));
    kary.root.children[1].children.push(new Node(7));
    kary.root.children[1].children[0].children.push(new Node(10), new Node(11));
    kary.root.children[1].children[0].children[0].children.push(new Node(12));
    kary.root.children[1].children[0].children[1].children.push(new Node(13), new Node(14), new Node(15));

    fizzBuzzTree(kary);

    expect(kary.root.children[1].children[0].children[1].children[2].value).toEqual('FizzBuzz');
  });

  it('Should replace values not divisible by either 3 or 5 with a string.', () => {
    const kary = {root: null}
    kary.root = new Node(1);
    kary.root.children.push(new Node(2), new Node(3));
    kary.root.children[0].children.push(new Node(4), new Node(5), new Node(6));
    kary.root.children[0].children[0].children.push(new Node(8), new Node(9));
    kary.root.children[1].children.push(new Node(7));
    kary.root.children[1].children[0].children.push(new Node(10), new Node(11));
    kary.root.children[1].children[0].children[0].children.push(new Node(12));
    kary.root.children[1].children[0].children[1].children.push(new Node(13), new Node(14), new Node(15));

    fizzBuzzTree(kary);

    expect(kary.root.value).toEqual('1');
    expect(kary.root.children[0].value).toEqual('2');
    expect(kary.root.children[0].children[0].value).toEqual('4');
    expect(kary.root.children[0].children[0].children[0].value).toEqual('8');
    expect(kary.root.children[1].children[0].value).toEqual('7');
    expect(kary.root.children[1].children[0].children[1].value).toEqual('11');
    expect(kary.root.children[1].children[0].children[1].children[0].value).toEqual('13');
    expect(kary.root.children[1].children[0].children[1].children[1].value).toEqual('14');
  });
});
