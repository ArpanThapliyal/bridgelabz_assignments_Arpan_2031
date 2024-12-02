// 1. Get Single Digit Random Number
console.log(Math.floor(Math.random() * 10));

// 2. Get Dice Number Between 1 to 6
console.log(Math.floor(Math.random() * 6) + 1);

// 3. Add Two Random Dice Numbers
let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
console.log("Sum of two dice: ", dice1 + dice2);

// 4. Sum and Average of 5 Random 2-Digit Values
let sum = 0;
for (let i = 0; i < 5; i++) {
    sum += Math.floor(Math.random() * 90) + 10;
}
console.log("Sum:", sum, "Average:", sum / 5);

// 5. Unit Conversion
// a. Inches to Feet
console.log("42 inches in feet:", 42 / 12);
// b. Rectangular Plot Area in Meters
console.log("Plot Area in meters:", (60 * 40) * 0.092903);
// c. Area of 25 Plots in Acres
console.log("Area of 25 plots in acres:", (60 * 40 * 25) * 0.0000229568);
