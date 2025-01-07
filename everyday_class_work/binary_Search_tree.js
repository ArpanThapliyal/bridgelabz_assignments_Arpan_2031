class node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class binarySearchTree {
    constructor(){
        this.root = null;

    }
    insert(data){
        let newnode = new node(data); 
        if(this.root == null){
            this.root = newnode;
        }
        else{
            this.insertAt(this.root,newnode);
        }
    }
    insertAt(nodeA,newnode){
        if(nodeA.data > newnode.data){
            if(nodeA.left == null){
                nodeA.left = newnode;
            }
            else{
                this.insertAt(nodeA.left , newnode);
            }
        }
        else{
            if(nodeA.right == null){
                nodeA.right = newnode;
            }
            else{
                this.insertAt(nodeA.right , newnode);
            }
        }
    }
    //traversal
    // (inorder)  -> left,root,right
    inorder(temp = this.root , arr = []){     
        if(temp == null) return ;
        this.inorder(temp.left,arr);
        arr.push(temp.data);
        this.inorder(temp.right,arr);
        return arr;
    }
    //(post-order)  -> left,right,root
    postorder(temp = this.root , arr = []){
        if (temp==null) return;
        this.postorder(temp.left,arr);
        this.postorder(temp.right,arr);
        arr.push(temp.data);
        return arr;
    }
    //(pre-order)  -> root,left,right
    preorder(temp = this.root , arr = []){
        if (temp==null) return;
        arr.push(temp.data);
        this.preorder(temp.left,arr);
        this.preorder(temp.right,arr);
        return arr;
    }

    // level order (bfs)
    levelorder(root,arr=[]){
        if(root ==null) return;
        let que = [root];
        while(que.length >0){
            let temp = que.shift();
            arr.push(temp.data);
            if(temp.left) que.push(temp.left);
            if(temp.right) que.push(temp.right);
        }
        return arr;
    }

     // Remove function
     remove(data, node = this.root) {
        if (node == null) return null;

        // Traverse the tree to find the node to be removed
        if (data < node.data) {
            node.left = this.remove(data, node.left);
        } else if (data > node.data) {
            node.right = this.remove(data, node.right);
        } else {
            // Node to be removed found
            // Case 1: Node has no children (leaf node)
            if (node.left == null && node.right == null) {
                return null;
            }
            // Case 2: Node has one child
            else if (node.left == null) {
                return node.right;
            } else if (node.right == null) {
                return node.left;
            }
            // Case 3: Node has two children
            else {
                // Find the in-order successor (smallest node in the right subtree)
                let successor = this.findMin(node.right);
                node.data = successor.data; // Replace data with successor's data
                node.right = this.remove(successor.data, node.right); // Remove successor
            }
        }
        return node;
    }

    // Helper function to find the minimum node in a subtree
    findMin(node) {
        while (node.left != null) {
            node = node.left;
        }
        return node;
    }

}

let tree = new binarySearchTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

console.log(`inorder : ${tree.inorder().join("->")}`);
console.log(`postorder : ${tree.postorder().join("->")}`);
console.log(`preorder : ${tree.preorder().join("->")}`);
console.log(`level-order : ${tree.levelorder(tree.root).join("->")}`);
