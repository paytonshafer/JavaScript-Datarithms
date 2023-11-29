class TreeNode{
    constructor(val, left, right){
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }

    setLeft(node){
        this.left = node
    }

    setRight(node){
        this.right = node
    }

    insert(val){
        if(val === this.val) return false
        if(val > this.val){
            if(this.right) return this.right.insert(val)
            this.right = new TreeNode(val)
            return true
        }
        if(val < this.val){
            if(this.left) return this.left.insert(val)
            this.left = new TreeNode(val)
            return true
        }
    }

    delete(val) {
        const deleteNode = (node, value) => {
            if (!node) {
                return null;
            }

            if (value < node.val) {
                node.left = deleteNode(node.left, value);
                return node;
            } else if (value > node.val) {
                node.right = deleteNode(node.right, value);
                return node;
            } else {
                if (!node.left) {
                    return node.right;
                } else if (!node.right) {
                    return node.left;
                }

                node.val = findMinValue(node.right);

                node.right = deleteNode(node.right, node.val);
                return node;
            }
        };

        const findMinValue = (node) => {
            while (node.left) {
                node = node.left;
            }
            return node.val;
        };

        return deleteNode(this, val);
    }
}

const search = (root, val) => {
    if(!root) return null
    if(root.val === val) return root
    if(val > root.val) return search(root.right, val)
    if(val < root.val) return search(root.left, val)
}

const root = new TreeNode(4)
root.insert(2)
root.insert(7)
root.insert(1)
root.insert(3)
const tree = `
    4 
   / \\
  2   7  
 / \\
1   3
`
console.log('Creating Tree:')
console.log(tree)

console.log('Search for 5: ' + search(root, 5))
console.log(`Search for 2:`)
console.log(search(root, 2))

console.log('Deleting 2:')
root.delete(2)
const newtree = `
    4 
   / \\
  3   7  
 / 
1   
`
console.log(newtree)

/*
Creating Tree:

    4 
   / \
  2   7  
 / \
1   3

Search for 5: null
Search for 2:
TreeNode {
  val: 2,
  left: TreeNode { val: 1, left: null, right: null },
  right: TreeNode { val: 3, left: null, right: null }
}
Deleting 2:

    4 
   / \
  3   7  
 / 
1   
*/