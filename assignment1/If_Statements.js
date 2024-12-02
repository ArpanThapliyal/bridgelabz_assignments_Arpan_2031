// 1. Minimum and Maximum of 5 Random 3-Digit Numbers
let numbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 900) + 100);
console.log("Numbers:", numbers, "Min:", Math.min(...numbers), "Max:", Math.max(...numbers));

// 2. Day and Month Check
let day = parseInt(prompt("Enter day: "));
let month = parseInt(prompt("Enter month: "));
console.log("Is between March 20 and June 20:", month > 3 && month < 6 || (month === 3 && day >= 20) || (month === 6 && day <= 20));

// 3. Leap Year Check
let year = parseInt(prompt("Enter a year: "));
console.log(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? "Leap Year" : "Not a Leap Year");

// 4. Coin Flip
console.log(Math.random() < 0.5 ? "Heads" : "Tails");

// ___________________________________________________________
// 1. Read a Single Digit Number and Write the Number in Word

let digit = parseInt(prompt("Enter a single digit number: "));
switch (digit) {
    case 0: console.log("Zero"); break;
    case 1: console.log("One"); break;
    case 2: console.log("Two"); break;
    case 3: console.log("Three"); break;
    case 4: console.log("Four"); break;
    case 5: console.log("Five"); break;
    case 6: console.log("Six"); break;
    case 7: console.log("Seven"); break;
    case 8: console.log("Eight"); break;
    case 9: console.log("Nine"); break;
    default: console.log("Invalid Input"); break;
}
// 2. Read a Number and Display the Week Day (Sunday, Monday,…)

let weekDay = parseInt(prompt("Enter a number (1-7): "));
switch (weekDay) {
    case 1: console.log("Sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break;
    case 4: console.log("Wednesday"); break;
    case 5: console.log("Thursday"); break;
    case 6: console.log("Friday"); break;
    case 7: console.log("Saturday"); break;
    default: console.log("Invalid Input"); break;
}
// 3. Read a Number 1, 10, 100, 1000, etc. and Display Unit, Ten, Hundred,…

let number = parseInt(prompt("Enter a number (1, 10, 100, 1000, ...): "));
switch (number) {
    case 1: console.log("Unit"); break;
    case 10: console.log("Ten"); break;
    case 100: console.log("Hundred"); break;
    case 1000: console.log("Thousand"); break;
    default: console.log("Invalid Input"); break;
}
// 4. Enter 3 Numbers, Perform Arithmetic Operations, and Find Max & Min

let a = parseFloat(prompt("Enter the first number (a): "));
let b = parseFloat(prompt("Enter the second number (b): "));
let c = parseFloat(prompt("Enter the third number (c): "));

let op1 = a + b * c;
let op2 = a % b + c;
let op3 = c + a / b;
let op4 = a * b + c;

console.log("Results of operations:");
console.log("a + b * c =", op1);
console.log("a % b + c =", op2);
console.log("c + a / b =", op3);
console.log("a * b + c =", op4);

let max = Math.max(op1, op2, op3, op4);
let min = Math.min(op1, op2, op3, op4);

console.log("Maximum value:", max);
console.log("Minimum value:", min);
