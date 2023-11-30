const quick_sort = (arr) => {
    if (arr.length <= 1) {
        return arr; // Already sorted if it has 0 or 1 element
      }
    
      // Choose a pivot element (usually the middle element)
      const pivot = arr[Math.floor(arr.length / 2)];
    
      // Partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot
      const left = arr.filter(element => element < pivot);
      const equal = arr.filter(element => element === pivot);
      const right = arr.filter(element => element > pivot);
    
      // Recursively sort the sub-arrays and concatenate them
      return quick_sort(left).concat(equal, quick_sort(right));
}

const unsorted = [5, 2, 4, 6, 1, 3]
console.log('Unsorted: ' + unsorted)

const sorted = quick_sort(unsorted)
console.log('Sorted: ' + sorted)