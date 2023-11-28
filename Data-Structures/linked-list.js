// Class for node of a linked list
class ListNode {
    /**
     * @param {number} val - Value of the node
     * @param {ListNode} [nextNode=null] - Reference to the next node
     */
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }


}

// Class for linked list
class LinkedList {
    /**
     * @constructor
     * We initalize the list with a dummy node such that removing the first element may be easier
     */
    constructor() {
        this.head = new ListNode(-1)
        this.tail = this.head
    }

    /**
     * Return the value at index 
     * @param {number} index - index looking for
     * @return {number} - returns value at index
     */
    get(index) {
        let cur = this.head.next
        let i = 0
        while(cur){
            if(i == index){
                return cur.val
            }
            cur = cur.next
            i++
        }
        return -1 // Not found
    }

    /**
     * Insert a new node at the head of the list
     * @param {number} val - value of new node
     * @return {void} - adding new node
     */
    insertHead(val) {
        const newNode = new ListNode(val)
        newNode.next = this.head.next
        this.head.next = newNode
        if(!newNode.next){ // Check if the linked list was empty before insertion
            this.tail = newNode
        }
    }

    /**
     * Insert a new node at the head of the list
     * @param {number} val - value of new node
     * @return {void} - adding new node
     */
    insertTail(val) {
        const newNode = new ListNode(val)
        this.tail.next = newNode
        this.tail = newNode
    }

    /**
     * Remove element at given index
     * @param {number} index - index of node to remove
     * @return {boolean} - remove node
     */
    remove(index) {
        let cur = this.head
        let i = 0
        while(i < index && cur){
            cur = cur.next
            i++
        }
        if(cur && cur.next){
            if (cur.next === this.tail) {
                this.tail = cur;
            }
            cur.next = cur.next.next
            return true // Found and removed
        }
        return false // Failed to remove
    }

    /**
     * Return list of values in linked list
     * @return {number[]} - returned array
     */
    getValues() {
        let curr = this.head.next;
        const res = [];
        while (curr) {
            res.push(curr.val);
            curr = curr.next;
        }
        return res;
    }
}

const demo = () => {
    const ll = new LinkedList()
    console.log('Made a linked list and added four elements.')
    ll.insertHead(1)
    ll.insertHead(2)
    ll.insertHead(3)
    ll.insertHead(4)
    console.log('Now lets get the values')
    console.log(ll.getValues())
    console.log('Now lets remove the 2nd and get the values')
    ll.remove(2)
    console.log(ll.getValues())
}

demo()

/* Output
Made a linked list and added four elements.
Now lets get the values
[ 4, 3, 2, 1 ]
Now lets remove the 2nd and get the values
[ 4, 3, 1 ]
*/