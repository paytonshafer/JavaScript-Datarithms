# Sorting Algorithms in Java Script
This folder contains a collection of commonly used sorting algorithms. These are desgined to be reused for any usecase so they are the bar minimum. The runtime with theta notation and the space complexity is given in the description.

## Table of Contents
1. [Insertion Sort](#insertion-sort)
2. [Merge Sort](#merge-sort)
3. [Quick Sort](#quick-sort)

## Insertion Sort
Insert each element into a new array in the correct order, shifting the output with each new element.

Time Complexity: Θ(n^2)
Space Complexity: O(n)

## Merge Sort
Sort subsets of elements starting with pairs of 2. Continue to merge increasingly larger subets until the whole array is sorted.

Time Complexity: Θ(n*log(n))
Space Complexity: O(n)

## Quick Sort
With a recursive divide and conquer scheme and a selected pivot. All lesser elements are moved to one subset and greater to another. Each subset is recursivly proccessed in the same mannor until the recurrence has been satisified.

Time Complexity: Θ(n*log(n))
Space Complexity: O(1)