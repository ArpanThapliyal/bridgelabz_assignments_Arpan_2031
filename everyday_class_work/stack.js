// Implementation

class Stack{
    constructor(){
        this.stack = [];
    }
    push(data){
        this.stack.push(data);
    }
    pop(){
        if(this.size() <=0){
            console.log("array is empty !!");
            return;
        }
        return this.stack.pop();
    }
    peek(){
        return this.stack[this.size()-1];
    }
    size(){
        return this.stack.length;
    }
    isEmpty(){
        if(this.size() <=0){
            return true;
        }
        return false;
    }
    display(){
       console.log(...this.stack);
    }
}

// sort in ascending order
let s= new Stack();
let s2= new Stack();
let arr = [7,3,2,4,6,1,5];

arr.forEach((val)=> s.push(val));

while (!s.isEmpty()) {
    let temp = s.pop();

    while (!s2.isEmpty() && s2.peek() > temp) {
        s.push(s2.pop());
    }

    s2.push(temp);
}

while (!s2.isEmpty()) {
    s.push(s2.pop());
}
s.display();


// postfix to infix

// function isopr(x) {
//     return (x >= 'a' && x <= 'z') || (x >= 'A' && x <= 'Z');
// }

// function postfixtoinfix(str) {
//     let s = new Stack();

//     for (let i = 0; i < str.length; i++) {
//         if (isopr(str[i])) {
//             s.push(str[i]); 
//         } 
//         else { 
//             let op1 = s.pop(); 
//             let op2 = s.pop(); 
//             let result = `(${op2}${str[i]}${op1})`;
//             s.push(result); 
//         }
//     }
//     return s.pop(); 
// }


// let str = "ab/c-";
// console.log(postfixtoinfix(str)); 
