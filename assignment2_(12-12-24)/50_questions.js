// 1. Print numbers from 1 to 10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 2. Print the odd numbers less than 100
// for (let i = 1; i < 100; i += 2) {
//     console.log(i);
// }

// 3. Print the multiplication table with 7
// for (let i = 1; i <= 10; i++) {
//     console.log(`7 x ${i} = ${7 * i}`);
// }

// 4. Print all the multiplication tables with numbers from 1 to 10
// for (let i = 1; i <= 10; i++) {
//     console.log(`Multiplication Table for ${i}:`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
//     console.log(''); // Empty line for separation
// }

// 5. Calculate the sum of numbers from 1 to 10
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log(`Sum of numbers from 1 to 10 is ${sum}`);

// 6. Calculate 10!
// let factorial = 1;
// for (let i = 1; i <= 10; i++) {
//     factorial *= i;
// }
// console.log(`10! = ${factorial}`);

// 7. Calculate the sum of even numbers greater than 10 and less than 30
// let evenSum = 0;
// for (let i = 12; i < 30; i += 2) {
//     evenSum += i;
// }
// console.log(`Sum of even numbers greater than 10 and less than 30 is ${evenSum}`);

// 8. Create a function that will convert from Celsius to Fahrenheit
// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
// }
// console.log(`25°C = ${celsiusToFahrenheit(25)}°F`);

// 9. Create a function that will convert from Fahrenheit to Celsius
// function fahrenheitToCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5/9;
// }
// console.log(`77°F = ${fahrenheitToCelsius(77).toFixed(2)}°C`);

// 10. Calculate the sum of numbers in an array of numbers
// function sumOfArray(arr) {
//     return arr.reduce((acc, num) =>{
//          return acc + num;
//         },0);
// }
// let numbers = [1, 2, 3, 4, 5];
// console.log(`Sum of array [1, 2, 3, 4, 5] is ${sumOfArray(numbers)}`);

// 11. Calculate the average of the numbers in an array of numbers
// function averageOfArray(arr) {
//     if (arr.length === 0) return 0;
//     return sumOfArray(arr) / arr.length;
// }
// console.log(`Average of array [1, 2, 3, 4, 5] is ${averageOfArray(numbers)}`);

// 12. function that receives an array of numbers as argument and returns an array containing only the positive numbers
// let arr = [10,20,-30,40,-50,60];
// let newArr = arr.filter((val)=>{
//     if(val>0) return val;
// });
// console.log(`your positive array = ${newArr}`);

// 13. Find the maximum number in an array of numbers
// let arr = [10,20,30,40,50];
// function findMax(arr) {
//     return Math.max(...arr);
// }
// console.log(`max no. is : ${findMax(arr)}`);

// 14. Print the first 10 Fibonacci numbers without recursion
// function fibonacciNonRecursive() {
//     let fib = [0, 1];
//     for (let i = 2; i < 10; i++) {
//         fib.push(fib[i - 1] + fib[i - 2]);
//     }
//     return fib;
// }
// console.log(fibonacciNonRecursive());

// 15. function that will find the nth Fibonacci number using recursion
// function Fibonacci(n) {
//     if(n<=1) return n;
//     return Fibonacci(n-1)+Fibonacci(n-2);
// }
// let n=7;
// console.log(`your nth no. id ${Fibonacci(n)}`);

// 16. Check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
// console.log(`your no. isprime => ${isPrime(2)}`);

// 17. Calculate the sum of digits of a positive integer number
// function sumOfDigits(num) {
//     return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
// }

// 18. Print the first 100 prime numbers
    //remove comment from 16Q
function first100Primes() {
    let primes = [];
    let num = 2;
    while (primes.length < 100) {
        if (isPrime(num)) primes.push(num);
        num++;
    }
    return primes;
}
// console.log(first100Primes());
// 19. Return an array of the first “p” prime numbers greater than “n”
// function primesGreaterThanN(p, n) {
//     let primes = [];
//     let num = n + 1;
//     while (primes.length < p) {
//         if (isPrime(num)) primes.push(num);
//         num++;
//     }
//     return primes;
// }
// console.log(primesGreaterThanN(10,6));

// 20.Rotate an array to the left 1 position
// // let arr = [10,20,30,40,50];
// // arr.push(arr.shift());
// // console.log(arr);

// 21. Rotate an array to the right 1 position
// // let arr = [10,20,30,40,50];
// // arr.unshift(arr.pop());
// // console.log(arr);

// // 22. Reverse an array
// function reverseArray(arr) {
//     return arr.reverse();
// }

// 23. Reverse a string
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// 24. Merge two arrays and return a new array
// let arr1 = [1,2,3,4];
// let arr2 = [11,21,31,41];
// function mergeArrays(arr1, arr2) {
//     return [...arr1, ...arr2];
// }
// console.log(mergeArrays(arr1,arr2));


// // 25. Return an array of numbers in either the first or second array but not both
// let arr1 = [1,2,3,4];
// let arr2 = [11,2,3,41];
// function symmetricDifference(arr1, arr2) {
//     return arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
// }
// console.log(symmetricDifference(arr1,arr2));

// 26. Return elements in the first array but not in the second
// function difference(arr1, arr2) {
//     return arr1.filter(x => !arr2.includes(x));
// }
// console.log(difference(arr1,arr2));

// 27. Return a new array with distinct elements
// let arr = [1,3,2,3,5,1,4,4,6];
// function distinctElements(arr) {
//     return [...new Set(arr)];
// }
// console.log(distinctElements(arr));

// 28. sum of first 100 prime numbers and return them in an array
     //remove comment from 18Q
// console.log(first100Primes().reduce((prev,curr)=> prev+=curr,0));

// 29. Print the distance between the first 100 prime numbers
// let arr = first100Primes();
// let ans=[];
// for(let i=1;i<arr.length;i++){
//     ans.push(arr[i]-arr[i-1]);
// }
// console.log(ans);

// 30. function that will add two +ve numbers of indefinite size. The numbers will be strings and the result will also be string.
   //1st way => function for fixed size 
// function addString(str1,str2) {
//     let n1 = Number.parseInt(str1); 
//     let n2 = Number.parseInt(str2);
//     console.log((n1+n2).toString());
// }
    //2nd way => function for infinite size
//     function addLargeString(s1,s2){
//         let i=s1.length-1;
//         let j=s2.length-1;
//         let str="" ;
//         let carry=0;
//         while(i>=0 || j>=0){
//             let num ;

//             if(i<0 && j<0) num=0;
//             else if(i<0) num = 0+Number(s2[j]);
//             else if(j<0) num = Number(s1[i])+0;
//             else num = Number(s1[i])+Number(s2[j]);
//             if(num>9 ||carry>0){
//                 if(carry>0){
//                     num+=carry;
//                     carry=0;
//                 }
//                 str+=(num%10)+carry;
//                 carry=parseInt(num/10);
                
//             }
//             else{
//                 str+=(num+carry);
//                 carry=0;
//             }
//             i--;
//             j--;
//         }
//         if(carry>0) str+=carry;
//         return str;
//     }
// let str1 = "12345678982345345623456"; 
// let str2 = "923456789034567899";
// addString(str1,str2);
// console.log(addLargeString(str1,str2).split("").reverse().join(""));

// 31. Create a function that will return the number of words in a text
// let str = "hello ji kese ho sare";
// console.log(str.split(" ").length);

// 32. function that will capitalize the first letter of each word in a text
// let str = "hello ji kese ho sare";
// function capital(arr){
//     for(let i=0;i<arr.length;i++){
//         arr[i] = arr[i].slice(0,1).toUpperCase()+arr[i].slice(1);
//     }
//     return arr.join(" ");
// }
// console.log(capital(str.split(" ")));

//33. sum of numbers received in a comma delimited string 
// const str = "1,2,3,4,5";
// let sum=0;
// let arr = str.split(",");
// for(let i of arr){
//    sum+= Number(i);
// }
// console.log(sum);




