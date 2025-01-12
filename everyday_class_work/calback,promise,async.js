// callback

// function getdata(data, nextdata){
//     setTimeout(()=>{
//         console.log("data", data);
//         if(nextdata) nextdata();
//     },2000);
// }
// //callback hell
// getdata(2,()=>{
//     getdata(3,()=>{
//         getdata(4);
//     });
// });
// _____________________________________________________________

//promise

// function fetchdata(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",data);
//             resolve("success");
//         },3000);
//     });
// }

// // promise chaining

// console.log("fetching data 1");
// fetchdata(1).then(()=>{
//     return fetchdata(2);
// }).then(()=>{
//     return fetchdata(3);
// }).then((res)=>{
//     console.log(res);
// })

// __________________________############

//this is the case of setTimeout when time is set '0'.
//here also set time out work "asynchronusly" ,even tough it will
// get performed immidiately (due to 0 time),cause of the event loop 
// concept it will work this way 
//hence giving answer => 
/*
___start___
____end___
# success #

*/
// console.log("___start___");     // 1st
// new Promise((resolve,reject)=>{
//     setTimeout(reject,0,"# success #");  // 2nd
// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.error(err);  //give error 
// });
// console.log("____end___");   // 3rd

// ____________________________________________________________
function getdata(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",data);
            resolve(200);
        },2000);
    });
}
console.log("fetching data...")
async function solve(){
    await getdata(1);
    await getdata(2);
    await getdata(3);
    await getdata(4);
}
solve();