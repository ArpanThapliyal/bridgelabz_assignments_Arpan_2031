// // reverse a string

// let str = "hello ji";
// let ans = str.split(' ').reverse().join(' ') ;
// // for(let i=str.length-1;i>=0;i--){
// //     ans+=str.charAt(i);
// // }
// console.log(ans);

// ___________________________________________________________
// Longest Common Prefix using Sorting

// let strArr = ['geeksforgeeks', 'geeks', 'geek', 'geezer'];
// strArr.sort();
// let i=0;
// let j=0;
// while(i<strArr[0].length && j<strArr[strArr.length-1].length){
//     if(strArr[0][i]===strArr[strArr.length-1][j]){
//         i++;
//         j++;
//     }
//     else{
//         break;
//     }
// }
// console.log(`your common string is ${strArr[0].slice(0,i)}`);

// ____________________________________________________________

// Isomorphic Strings Check (given string of same length)

// let s1 = "axy";
// let s2= "aab";
// let flag = true;
// let mp = new Map();
// for(let i=0;i<s1.length;i++){
//     if(mp.has(s1[i])){
//         if(mp.get(s1[i]) != s2[i]){
//             flag=false;
//             break;
//         }
//     }
//     else{
//         mp.set(s1[i],s2[i]);
//     }
// }
// if(flag===true){
//     console.log(`your strings are isomprhic`);
// }
// else{
//     console.log(`your strings are not isomprhic !!`);
// }

// ___________________________________________________________



