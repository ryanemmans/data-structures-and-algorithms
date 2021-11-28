'use strict';

const insertionSort = require('./insertion-sort.js');

describe('Testing insertion sort', () => {
  it('Can successfully sort an array', () => {
    const arr = [8, 4, 23, 42, 16, 15];
    expect(insertionSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
