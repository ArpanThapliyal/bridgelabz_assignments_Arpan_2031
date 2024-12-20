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
    }
    display(){
        let temp = this.head;
        while(temp){
            console.log(temp.data);
            temp = temp.next;
        }
    }
    
}
// let newll = new LinkedList();

// newll.add(10);  //adding element
// newll.add(20);
// newll.add(30);
// newll.add(40);

// newll.display();  // display list
// console.log(`Size : ${newll.size}`);  //size

// newll.remove(1);  // removing
// newll.addFirst(100); // adding first in ll
// newll.addLast(500); // adding last in ll
// newll.display();
// console.log(`Size : ${newll.size}`);
// newll.addAt(900,2);
// newll.display();

// ____________________________________________________________
// // merge two sorted linked lists and create a sorted list;
// let l1= new LinkedList();
// l1.add(1);
// l1.add(2);
// l1.add(4);
// l1.add(5);

// let l2= new LinkedList();
// l2.add(3);
// l2.add(4);
// l2.add(6);
// l2.add(7);

// let head1 =l1.head; 
// let head2 =l2.head; 

// //merge function
// function merge(temp1,temp2){
//     let lf = new LinkedList();
//     while(temp1!=null && temp2!=null){
//         if(temp1==null || temp2==null){
//             break;
//         }
//         if(temp1.data <= temp2.data){
//             lf.add(temp1.data);
//             temp1= temp1.next;
//         }
//         else{
//             lf.add(temp2.data);
//             temp2= temp2.next;
//         }  
//     }
//     if(temp1!=null){
//         while(temp1!=null){
//             lf.add(temp1.data);
//             temp1= temp1.next;
//         }
//     }
//     else{
//         while(temp2!=null){
//             lf.add(temp2.data);
//             temp2 = temp2.next;
//         }
//     }
    
//     lf.display();
//     return lf;
// }
// let ll = merge(head1,head2);

// //finding middle value
// function middle(temp){
//     let slow = temp;
//     let fast = temp;

//     while(fast!=null && fast.next!=null){
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     return slow.data;
// }
// console.log (`your middle value is : ${middle(ll.head)}`);

// // print reverse
// function reverse(temp, lf = null){
//     if(temp==null) return lf;
//     if(!lf) lf = new LinkedList();
//     reverse(temp.next,lf);
//     lf.add(temp.data);
//     return lf;
// }
// reverse(ll.head).display();









