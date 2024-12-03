// 1. Single Digit to Word
let digit = parseInt(prompt("Enter a single digit: "));
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
    default: console.log("Invalid Input");
}

// 2. Week Day from Number
let weekDay = parseInt(prompt("Enter a number (1-7): "));
switch (weekDay) {
    case 1: console.log("Sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break;
    case 4: console.log("Wednesday"); break;
    case 5: console.log("Thursday"); break;
    case 6: console.log("Friday"); break;
    case 7: console.log("Saturday"); break;
    default: console.log("Invalid Input");
}

// 3. Number to Unit, Ten, Hundred, etc.
let number = parseInt(prompt("Enter a number (1, 10, 100, 1000): "));
switch (number) {
    case 1: console.log("Unit"); break;
    case 10: console.log("Ten"); break;
    case 100: console.log("Hundred"); break;
    case 1000: console.log("Thousand"); break;
    default: console.log("Invalid Input");
}

/* 4. Write a program that takes User Inputs and does Unit Conversion of
different Length units
1. Feet to Inch 3. Inch to Feet
2. Feet to Meter 4. Meter to Feet */

function unitConversion() {
    let choice = parseInt(prompt(`Choose a conversion option:
    1. Feet to Inch
    2. Feet to Meter
    3. Inch to Feet
    4. Meter to Feet`));

    switch (choice) {
        case 1: {
            let feet = parseFloat(prompt("Enter length in feet: "));
            console.log(`${feet} feet is equal to ${feet * 12} inches.`);
            break;
        }
        case 2: {
            let feet = parseFloat(prompt("Enter length in feet: "));
            console.log(`${feet} feet is equal to ${feet * 0.3048} meters.`);
            break;
        }
        case 3: {
            let inches = parseFloat(prompt("Enter length in inches: "));
            console.log(`${inches} inches is equal to ${inches / 12} feet.`);
            break;
        }
        case 4: {
            let meters = parseFloat(prompt("Enter length in meters: "));
            console.log(`${meters} meters is equal to ${meters / 0.3048} feet.`);
            break;
        }
        default: {
            console.log("Invalid choice. Please choose a valid option.");
        }
    }
}
// call
unitConversion();

