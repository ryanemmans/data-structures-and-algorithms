# Merge Sort

Merge sort is an efficient, general-purpose, and comparison-based sorting algorithm.

## Algorithm

1. Split the input array in half
2. Continue splitting until the sub-arrays contain only one element.
3. Then merge sub-arrays while sorting smallest to largest.
4. Repeat until all sub-arrays have been merged into an array of the original length.

## Psuedocode

```js
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

## Trace

Sample Array: `[8,4,23,42,16,15]`

![Merge Sort](./merge-sort.png)

## Efficiency

- Time:
  - O(nlogn)
- Space:
  - O(n)
