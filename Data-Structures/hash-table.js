class ListNode {
    constructor(key) {
        this.key = key
        this.next = null
    }
}

class HashTable {
    constructor(size){
        this.size = size
        this.buckets = new Array(this.size).fill(null)
    }

    hash(key){
        return key % this.size
    }

    // returns index and bucket key is located in
    get(key){
        const index = this.hash(key)
        const bucket = this.buckets[index]
        return {index, bucket}
    }

    add(key){
        let {index, bucket} = this.get(key)
        if(!bucket){
            this.buckets[index] = new ListNode(key)
        }else{
            let current = bucket
            while(current){
                if(current.key === key) return
                if(!current.next) break
                current = current.next
            }
    
            current.next = new ListNode(key)
        }
    }

    remove(key){
        let { index, bucket} = this.get(key)
        if(!bucket) return
        if(bucket.key === key){
            this.buckets[index] = bucket.next
            return
        }
        let current = bucket
        while(current){
            if(current.next.key == key){
                current.next = current.next.next
                return
            }
    
            current = current.next
        }
    }

    contains(key){
        let { bucket} = this.get(key)
        let current = bucket
        while(current){
            if(current.key === key) return true
            current = current.next
        }
        return false
    }
}

const hash = new HashTable(5)
hash.add(23)
hash.add(45)
hash.add(50)
hash.add(75)
hash.add(42)
console.log('Lets look at the buckets:')
for(let i = 0; i < hash.size; i++){
    console.log(hash.buckets[i])
}
console.log('Lets remove 50')
hash.remove(50)
console.log('Lets look at the buckets:')
for(let i = 0; i < hash.size; i++){
    console.log(hash.buckets[i])
}

/* OUTPUT
Lets look at the buckets:
ListNode {
  key: 45,
  next: ListNode { key: 50, next: ListNode { key: 75, next: null } }
}
null
ListNode { key: 42, next: null }
ListNode { key: 23, next: null }
null
Lets remove 50
Lets look at the buckets:
ListNode { key: 45, next: ListNode { key: 75, next: null } }
null
ListNode { key: 42, next: null }
ListNode { key: 23, next: null }
null
*/