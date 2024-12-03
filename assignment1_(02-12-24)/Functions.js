// 1. Convert degF to degC and vice versa
function convertTemperature(value, scale) {
    switch (scale) {
        case 'C': return (value * 9 / 5) + 32;
        case 'F': return (value - 32) * 5 / 9;
        default: return null;
    }
}
console.log("Converted Temperature:", convertTemperature(100, 'C'));

// 2. Check if Numbers are Palindromes
function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}
console.log("Is Palindrome:", isPalindrome(121));

/* 3. Take a number from user and check if the number is a Prime then show
that its palindrome is also prime
a. Write function check if number is Prime
b. Write function to get the Palindrome.
c. Check if the Palindrome number is also prime
*/
// a. Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// b. Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

// c. Main program to check if the number is prime and its palindrome is also prime
function checkPrimeAndPalindromePrime() {
    let num = parseInt(prompt("Enter a number: "));
    
    if (isPrime(num)) {
        console.log(`${num} is a prime number.`);
        
        let palindrome = getPalindrome(num);
        console.log(`The palindrome of ${num} is ${palindrome}.`);
        
        if (isPrime(palindrome)) {
            console.log(`The palindrome ${palindrome} is also a prime number.`);
        } else {
            console.log(`The palindrome ${palindrome} is not a prime number.`);
        }
    } else {
        console.log(`${num} is not a prime number.`);
    }
}

// call
checkPrimeAndPalindromePrime();
