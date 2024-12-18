// implement
class node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    add(data){
        let newNode = new node(data);

        if(this.head == null){
            this.head = newNode;
        }
        else{
            let temp = this.head ;
            while (temp.next){
                temp = temp.next; 
            }
            temp.next = newNode;
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
        let temp = this.head;
        while(temp.next){
            temp=temp.next;
        }
        temp.next = newNode;
        this.size++;
    }
    remove(idx){
        if(idx==1){
            this.head = this.head.next;
        }
        else{
            let temp = this.head;
            while(idx-- >2){
                temp = temp.next;
            }
            temp.next = temp.next.next;
        }
        this.size--;

    }
    display(){
        let temp = this.head;
        while(temp){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
let newll = new LinkedList();

newll.add(10);  //adding element
newll.add(20);
newll.add(30);
newll.add(40);

newll.display();  // display list
console.log(`Size : ${newll.size}`);  //size

newll.remove(1);  // removing
newll.addFirst(100); // adding first in ll
newll.addLast(500); // adding last in ll
newll.display();
console.log(`Size : ${newll.size}`);
