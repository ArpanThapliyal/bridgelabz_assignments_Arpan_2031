//all the traversal techniques for array are listed below
let arr = [10,20,30,40,50,60,70,80];
let i=0;

//1.) for loop
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//2.) while
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

//3.) do-while
// i=0;
// do{
//     console.log(arr[i]);
//        i++;
// }
// while(i<arr.length);

//4.) forEach
// arr.forEach((val)=>{
//     console.log(val);
// });

//5.) for-of
// for(let i of arr){
//     console.log(i);
// }

//6.) for-in
// for(let i in arr){
//     console.log(arr[i]);
// }

//7.) recursion
// i=0;
// function traversal(i){
//     if(i===arr.length) return; 
//     console.log(arr[i]);
//     return traversal(i+1);
// }
// traversal(i);

//8.) map
// arr.map((val)=>{
//     console.log(val);
// });

//9.) filter
// arr.filter((val)=>{
//     console.log(val);
// });

//10.) reduce
// let new_arr = arr.reduce((prev,curr)=>{
//     console.log(prev);
//     return curr;  
// });
// console.log(new_arr);

//11.) some (true -> will return the loop)
// arr.some((val)=>{
//     console.log(val);
//     return false;  //for continuation of traversal
// });

//12.) every (false -> will stop the loop)
// arr.every((val)=>{
//     console.log(val);
//     return true;    //for continuation of traversal
// });

//13.) keys
// for(let i of arr.keys()){
//     console.log(arr[i]);
// }

//14.) values
// for(let i of arr.values()){
//     console.log(i);
// }

//15.) entites
// for(let [keys,value] of arr.entries()){
//     console.log(`your keys ${keys} and values ${value}`);
// }
