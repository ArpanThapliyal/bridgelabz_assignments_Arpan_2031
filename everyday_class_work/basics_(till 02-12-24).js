// const obj = {
//     fullName: "Arpan",
//     age : 33,
//     rollNo : 2031,
//     alive : true
// }
// both are the ways to access key's values
// console.log(obj["age"]);
// console.log(obj.age);
// ----------------------------------------------------------
// we can change values also
// obj["age"]++;
// obj.age = 10 + obj["age"];
// obj.roll= 2111;
// console.log(obj.roll);
// console.log(obj.age);
// ---------------------------------------------------------
//but we cannot redefine the whole object 
// obj = {
//     age:9090
// } 
// console.log(obj.age);
// ----------------------------------------------------------

// const num = prompt("enter a number ");
// let console_ans;
// let alert_ans;
// if(num%5 == 0){
//     console_ans = "yes it is a multiple of 5";
//     alert_ans = "true!!!!";
// }
// else if(isNaN(num)){
//     console_ans = "write a valid value";
//     alert_ans = "enter valid number!!!!";
// }
// else{
//     console_ans = "no it is not a multiple of 5";
//     alert_ans = "false hai bhai!!!!";
// }

// console.log(console_ans);
// alert(alert_ans);

// _____________________________________________________________

// let num = prompt("put the number you want other user to guess");
// let count=0;
// while(1){
//     let ans = prompt("guess the no.");
//     if(ans === num) break;
//     count ++;

//     if (count<3){
//         console.log("sorry!! ,WRONG  answer..")
//     }
//     else if(count>=3 && count<6){
//         console.log("TRY AGAIN !!!")
//     }
//     else{
//         console.log("DANM!!!!");
//     }
// }
// console.log("yes the correct answer was ",num);

// __________________________________________________________
// let str= prompt("enter the name");
// str= "@"+str+str.length;
// console.log(`your user name is -> ${str}`);

// ____________________________________________________________
// let arr=[85,97,44,37,76,60];
// let avg=0;
// for(let val of arr){
//     avg+=val;
// }
// console.log(avg/arr.length);

// ___________________________________________________________
// let items = [250,645,300,900,50];
// let total=0;
// for(let val of items){
//     total+=(val-val/10);
// }
// console.log(`your total will be ${total}`);

// __________________________________________________________
// let companies = ["bloomberg","microsoft","uber","google","ibm","netflix"];
// companies.shift();
// companies.splice(1,1,"ola");
// companies.push("amazon");
// console.log(companies);
