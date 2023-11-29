// Circular queue where you can add/remove values from the front and back
class CircularDequeue {
    constructor(size) {
        this.size = size
        this.queue = []
    }

    insertFront(value) {
        if(this.isFull()) return false
        this.queue.unshift(value)
        return true
    }
    
    insertLast(value) {
        if(this.isFull()) return false
        this.queue.push(value)
        return true
    }
    
    deleteFront() {
        if(this.isEmpty()) return false
        this.queue.shift()
        return true
    }
    
    deleteLast() {
        if(this.isEmpty()) return false
        this.queue.pop()
        return true
    }

    getFront() {
        if(this.isEmpty()) return -1;
        return this.queue[0];
    }
    
    getRear() {
        if(this.isEmpty()) return -1;
        return this.queue[this.queue.length - 1];
    }
    
    isEmpty() {
        if(this.queue.length == 0) return true
        return false
    }
    
    isFull() {
        if(this.queue.length == this.size) return true
        return false
    }
}

const demo = () => {
    const circularQueue = new CircularDequeue(5);

    console.log("Inserting values at the front and last:")
    console.log("Insert Front 1:", circularQueue.insertFront(1))
    console.log("Insert Last 2:", circularQueue.insertLast(2))  
    console.log("Insert Front 3:", circularQueue.insertFront(3))
    console.log("Insert Last 4:", circularQueue.insertLast(4))  
    console.log("Insert Front 5:", circularQueue.insertFront(5))

    console.log("Insert Last 6 (should be false):", circularQueue.insertLast(6))

    console.log("Front:", circularQueue.getFront()) 
    console.log("Rear:", circularQueue.getRear())  

    console.log("\nDeleting values from the front and last:")
    console.log("Delete Front:", circularQueue.deleteFront())
    console.log("Delete Last:", circularQueue.deleteLast())  

    console.log("Front:", circularQueue.getFront()) 
    console.log("Rear:", circularQueue.getRear())  
}

demo();
/*
Inserting values at the front and last:
Insert Front 1: true
Insert Last 2: true
Insert Front 3: true
Insert Last 4: true
Insert Front 5: true
Insert Last 6 (should be false): false
Front: 5
Rear: 4

Deleting values from the front and last:
Delete Front: true
Delete Last: true
Front: 3
Rear: 2
*/