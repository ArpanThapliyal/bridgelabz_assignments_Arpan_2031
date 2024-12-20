class node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class doubly_ll{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    add(data){
        let newnode = new node(data);
        if(this.head==null){
            this.head = newnode;
            this.tail = newnode;
        } 
        else{
            let temp = this.head;
            while(temp.next!=null){
                temp = temp.next;
            }
            temp.next = newnode;
            newnode.prev = temp;
            this.tail = newnode; 
        }  
        this.size++;
    }
    addFirst(data){
        let newNode = new node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    addLast(data){
        let newNode = new node(data);
        tail.next = newNode;
        newNode.prev = tail;
        tail = newNode; 
        this.size++;
    }
    remove(idx){
        if(idx==1){
            this.head = this.head.next;
            this.head.prev = null;
        }
        else{
            let temp = this.head;
            while(idx-- >2){
                temp = temp.next;
            }
            temp.next = temp.next.next;
            temp=temp.next;
            temp.prev=temp.prev.prev;
        }
        this.size--;

    }
    addAt(val,idx){
        let newnode = new node(val);
        if(idx==1) this.addFirst(newnode);
        if(idx==this.size) this.addLast(newnode);

        let temp = this.head;
        for(let i=1;i<idx-1;i++){
            temp = temp.next;
        } 
        newnode.next = temp.next;
        temp.next = newnode;
        newnode.prev = temp;
        newnode.next.prev = newnode; 
    }
    displayForward(){
        let temp = this.head;
        while(temp != null ){
            process.stdout.write(temp.data +" ");
            temp = temp.next;
        }
    }
    displayBackward(){
        let temp = this.tail;
        while(temp != null ){
            process.stdout.write(temp.data +" ");
            temp = temp.prev;
        }
    }

}

let ll = new doubly_ll();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.addAt(100,2);
ll.displayForward(); //forward displaying
console.log();
ll.remove(4)
ll.displayBackward();  //backward displaying