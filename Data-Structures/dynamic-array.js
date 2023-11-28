// Dynamic Array Class
// Note that JavaScript arrays are dynamic by default but this can be used for arrays like ones in Java or C++
class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity - inital capacity of the array
     */
    constructor(capacity) {
        this.capacity = capacity
        this.length = 0
        this.arr = new Array(this.capacity).fill(0)
    }

    /**
     * Get the value at the i-th index
     * @param {number} i - index of value of you want
     * @returns {number} - value at index i
     */
    get(i) {
        return this.arr[i]
    }

    /**
     * Set the i-th index to value n
     * @param {number} i - index of where you want to set
     * @param {number} n - value to set at index
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n
    }

    /**
     * Adds new value, n, to end of array
     * @param {number} n - new value to add
     * @returns {void} - adds the value to end of array so no return
     */
    push(n) {
        if (this.length === this.capacity){
            this.resize()
        }
        this.arr[this.length] = n
        this.length++
    }

    /**
     * Returns value at end of array and 'removes it'
     * @returns {number} - value at end
     */
    pop() {
        if(this.length > 0){
            this.length-- // soft remove (make it seem like it is gone)
        }
        return this.arr[this.length]
    }

    /**
     * Function to resize array by doubling the capacity
     * @returns {void} - doubles the capacity and moves over all elements
     */
    resize() {
        this.capacity *= 2
        const newArr = new Array(this.capacity).fill(0)

        for(let i = 0; i < this.length; i++){
            newArr[i] = this.arr[i]
        }
        this.arr = newArr
    }

    /**
     * Returns the size of the array (length)
     * @returns {number}
     */
    getSize() {
        return this.length
    }

    /**
     * Returns the capacity of the array
     * @returns {number}
     */
    getCapacity() {
        return this.capacity
    }
}

// Function to demo use of array
const demo = () => {
    // create array
    const arr = new DynamicArray(5)

    console.log('New Array created:\nCapacity = ' + arr.getCapacity())
    console.log('Adding elements: 1, 2, 3, 4 and 5')
    arr.push(1)
    arr.push(2)
    arr.push(3)
    arr.push(4)
    arr.push(5)
    console.log(arr)
    console.log('Pushing value 6, this will force a resize')
    arr.push(6)
    console.log(arr)
}

demo()

/* OUTPUT
New Array created:
Capacity = 5
Adding elements: 1, 2, 3, 4 and 5
DynamicArray { capacity: 5, length: 5, arr: [ 1, 2, 3, 4, 5 ] }
Pushing value 6, this will force a resize
DynamicArray {
  capacity: 10,
  length: 6,
  arr: [
    1, 2, 3, 4, 5,
    6, 0, 0, 0, 0
  ]
}
*/