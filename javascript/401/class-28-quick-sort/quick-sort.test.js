'use strict';

const quickSort = require('./quick-sort.js');

describe('Testing quick sort', () => {
  it('Can successfully sort an array', () => {
    const arr = [8, 4, 23, 42, 16, 15];
    const left = 0;
    const right = arr.length - 1;
    expect(quickSort(arr, left, right)).toStrictEqual([4, 8, 15, 16, 23, 42]);
  });
});
