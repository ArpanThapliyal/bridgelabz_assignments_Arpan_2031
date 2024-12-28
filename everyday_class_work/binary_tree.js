class node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class binaryTree{
    constructor(){
        this.root = null; 
    }
    insert(data){
        if(this.root == null) return new node(data);
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
        return this.root;
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
