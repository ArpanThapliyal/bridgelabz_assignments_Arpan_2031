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

// // reverse an array
// let arr = [1,2,3,4];
// console.log(arr.reverse());

// __________________________________________________________

// // sort an array
// let arr = [1,2,3,4];
// console.log(arr.sort());

// ___________________________________________________________
// Count number of occurrences (or frequency) in an array

// let arr = [1,2,2,3,,2,4,5,6,7,2,10];
// const target = 2;
// let count=0;
// arr.forEach((i)=>{
//     if(i===target){
//         count++;
//     }
// });
// console.log(`no. of occurences are ${count}`);

// _________________________________________________________
// // Find the row with maximum number of 1s

// let arr = [ [1,2,3,1],
//             [1,0,3,1],
//             [1,1,3,1],
//             [1,2,3,0]]
// let max =0;
// let ans;
// for(let i=0;i<arr.length;i++){
//     let count=0;
//     for(let j=0;j<arr[i].length;j++){
//         if(arr[i][j]===1){
//             count++;
//         }
//     }
//     if(count>max){
//         ans=i;
//         max=count;
//     } 
// }
// console.log(`your max no of 1's are in ${ans+1}rd row`);

// ____________________________________________________________

