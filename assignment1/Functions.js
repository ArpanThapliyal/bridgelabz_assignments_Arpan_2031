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
