const merge_sort = (arr) => {
    if(arr.length <= 1){
        return arr
    }

    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    const left = merge_sort(leftHalf);
    const right = merge_sort(rightHalf);

    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  
}

const unsorted = [5, 2, 4, 6, 1, 3]
console.log('Unsorted: ' + unsorted)

const sorted = merge_sort(unsorted)
console.log('Sorted: ' + sorted)