// 1. Table of Powers of 2
let n = parseInt(prompt("Enter a number: "));
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${2 ** i}`);
}

// 2. nth Harmonic Number
let harmonic = 0;
for (let i = 1; i <= n; i++) {
    harmonic += 1 / i;
}
console.log("nth Harmonic Number:", harmonic);

// 3. Prime Check
let d = parseInt(prompt("Enter a number: "));
let isPrime = d > 1 && [...Array(d).keys()].slice(2).every(i => num % i !== 0);
console.log("Is Prime:", isPrime);

// 4. Prime Numbers in a Range (Using For Loop)

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function primeNumbersInRange(start, end) {
    console.log(`Prime numbers between ${start} and ${end}:`);
    for (let i = start; i <= end; i++) {
        let prime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }
        if (prime && i > 1) {
            console.log(i);
        }
    }
}

let start = parseInt(prompt("Enter the start of the range: "));
let end = parseInt(prompt("Enter the end of the range: "));
primeNumbersInRange(start, end);
// 5. Factorial of a Number (Using For Loop)

function factorial(num) {
    if (num < 0) return "Factorial is not defined for negative numbers.";
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

let num = parseInt(prompt("Enter a number to compute its factorial: "));
console.log(`Factorial of ${num} is: ${factorial(num)}`);
// 6. Prime Factorization (Using For Loop)

function primeFactors(N) {
    console.log(`Prime factors of ${N}:`);

    for (let i = 2; i <= Math.sqrt(N); i++) {
        while (N % i === 0) {
            console.log(i);
            N /= i;
        }
    }

    if (N > 1) {
        console.log(N);
    }
}

let number = parseInt(prompt("Enter a number to compute its prime factors: "));
primeFactors(number);