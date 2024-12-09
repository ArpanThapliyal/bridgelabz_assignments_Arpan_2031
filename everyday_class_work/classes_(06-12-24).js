// class user {
//     constructor (name,email){  //constructor
//         this.name= name;
//         this.email= email;
//         console.log("here i am");
//     }
//     viewData (){
//         console.log(`your name is "${this.name}" and email is "${this.email}`);
//     }

// }
// class admin extends user{
//     edit_data(name=this.name, email=this.email){
//         return [name,email];
//     }
// }
// // 2 user class objects
// let user1= new user("arpan","123@gmail.com");
// let user2= new user("non","32109@gmail.com");
// // to view the data
// user1.viewData();
// // printing whole object
// console.log(user2);
// // making a new inherited class object  
// let admin1 = new admin("arpan","123@gmail.com");
// // logging after editing the data
// console.log(admin1.edit_data("pop","dop@gmail.com"));

// ___________________________________________________________
// reverse a string

// let str = "hello ji";
// let ans = str.split(' ').reverse().join(' ') ;
// // for(let i=str.length-1;i>=0;i--){
// //     ans+=str.charAt(i);
// // }
// console.log(ans);

// ___________________________________________________________
// find duplicate in array

// let arr = [1,3,5,7,2,4,3,2,4]; 
// let ans= new Set();
// let set = new Set();
// for(let i of arr){
//     if(set.has(i)){
//         if(!ans.has(i)){
//             console.log(i);
//             ans.add(i);
//         }
//     }
//     else{
//         set.add(i);
//     }
// }
// _________________________________________________________
//find min,max,sum of the given array

// let arr = [11,-211,13,45,-45,16];
// let max=0;
// let min=0;
// let sum=0;
// let negative=[];
// let positive=[];

// for(let i of arr){
//     if(max<i){
//         max=i;
//     }
//     if(min>i){
//         min=i;
//     }
//     if(i<0){
//         negative.push(i);
//     }
//     else{
//         positive.push(i);
//     }
//     // max=Math.max(i,max);
//     // min=Math.min(i,min);
//     sum+=i;
// }
// console.log(`your maximum no. is ${max}`);
// console.log(`your minimum no. is ${min}`);
// console.log(`your sum of no. is ${sum}`);
// console.log(`your positive no. is ${positive}`);
// console.log(`your negative no. is ${negative}`);
// ___________________________________________________________

// union and intersection
let arr1 =[1,2,2,4,6,6,7,8,0];
let arr2 =[1,3,2,4,6,7,7,8,9];
let union=[];
let intersection=[];
let set1= new Set();
let set2= new Set();

for(let i of arr1){
    if(!set1.has(i)){
        set1.add(i);
    }
}
for(let i of arr2){
    if(!set2.has(i)){
        set2.add(i);
    }
}

for(let i of set1){
    union.push(i);
}
for(let i of set2){
    if(set1.has(i)){
        intersection.push(i);
    }
    else{
        union.push(i);
    }
}

console.log(`your union is ${union.sort()}`);
console.log(`your intersection is ${intersection.sort()}`);
