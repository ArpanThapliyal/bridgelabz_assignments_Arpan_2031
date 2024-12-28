const { LinkedList } = require ("./linked_list.js");

class Stack{
    constructor(){
        this.stack = new LinkedList();
        this.this.size = 0;
    }
    push(data){
        this.stack.addFirst(data);
        this.size++;
    }
    pop(){
        this.size--;
        return this.stack.remove();
    }
    peek(){
        return this.stack.head.data;
    }
    isEmpty(){
        if(this.size==0) return true;
        return false;
    }
    display(){
        let temp = this.stack.head;
        while(temp){
            process.stdout.write(temp.data + " ");
            temp= temp.next;
        }
    }
}

let st= new Stack();
st.push(1);
st.push(2);
st.push(3);
st.push(4);

st.display();

