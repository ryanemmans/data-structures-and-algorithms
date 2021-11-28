'use strict';

const mergeSort = require('./merge-sort.js');

describe('Testing merge sort', () => {
  it('Can successfully sort an array', () => {
    const arr = [8, 4, 23, 42, 16, 15];
    expect(mergeSort(arr)).toStrictEqual([4, 8, 15, 16, 23, 42]);
  });
});
