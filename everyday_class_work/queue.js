class Queue{
    constructor(){
       this.queue = [];
        let size = 0;
    }
    add(data){
        this.queue.push(data);
        this.size++;
    }
    remove(){
        this.size--;
        return this.queue.shift();
    }
    peek(){
        return this.queue[0];
    }
    isEmpty(){
        if(this.size==0) return true;
        return false;
    }
    display(){
        this.queue.forEach((val)=>{
            process.stdout.write(val+" ");
        });
    }
}
let que = new Queue();
que.add(1);  // add 
que.add(2);  
que.add(3);  
que.add(4);

que.remove(); // remove
que.display(); // display
console.log(que.isEmpty());  // check if empty
console.log(que.peek());    // top element
