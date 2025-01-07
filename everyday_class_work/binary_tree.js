class node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class binaryTree {
    constructor(){
        this.root = null;
    }
    insert(data){
        if(this.root == null) {
            this.root = new node(data);
            return;
        }
        let que = [this.root];
        while(que.length > 0){
            let temp = que.shift();
            //left
            if(temp.left == null){
                temp.left = new node(data);
                break;
            }
            else{
                que.push(temp.left);
            }
            //right
            if(temp.right == null){
                temp.right = new node(data);
                break;
            }
            else{
                que.push(temp.right);
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
    levelorder(root = this.root,arr=[]){
        if(root == null) return root.data;
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
    remove(data) {
        if (this.root == null) return;

        let que = [this.root];
        let keyNode = null; // Node to delete
        let parent = null;  // Parent of keyNode

        while (que.length > 0) {
            let temp = que.shift();

            if (temp.data === data) {
                keyNode = temp;
            }
            if (temp.left) {
                parent = temp;
                que.push(temp.left);
            }
            if (temp.right) {
                parent = temp;
                que.push(temp.right);
            }
        }

        // If key node is not found
        if (!keyNode) {
            console.log(`Node with value ${data} not found.`);
            return;
        }

        // Find the deepest node
        let que2 = [this.root];
        let deepestNode = null;
        while (que2.length > 0) {
            deepestNode = que2.shift();
            if (deepestNode.left) que2.push(deepestNode.left);
            if (deepestNode.right) que2.push(deepestNode.right);
        }

        // Replace keyNode's data with deepestNode's data
        keyNode.data = deepestNode.data;

        // Delete the deepest node
        que2 = [this.root];
        while (que2.length > 0) {
            let temp = que2.shift();
            if (temp.left === deepestNode) {
                temp.left = null;
                break;
            } else if (temp.left) {
                que2.push(temp.left);
            }
            if (temp.right === deepestNode) {
                temp.right = null;
                break;
            } else if (temp.right) {
                que2.push(temp.right);
            }
        }
    }
}

let tree = new binaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

console.log(`inorder : ${tree.inorder().join("->")}`);
console.log(`postorder : ${tree.postorder().join("->")}`);
console.log(`preorder : ${tree.preorder().join("->")}`);
console.log(`level-order : ${tree.levelorder().join("->")}`);
