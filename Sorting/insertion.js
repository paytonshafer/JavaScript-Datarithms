const interstion_sort = (arr) => {
    for(let i = 1; i < arr.length; i++){
        let curr = arr[i]
        let j = i -1

        while(curr < arr[j] && j >= 0){
            arr[j+1] = arr[j]
            j--
        }

        arr[j + 1] = curr
    }
    return arr
}

const unsorted = [5, 2, 4, 6, 1, 3]
console.log('Unsorted: ' + unsorted)

const sorted = interstion_sort(unsorted)
console.log('Sorted: ' + sorted)