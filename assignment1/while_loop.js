// 1. Table of Powers of 2 (Using While Loop)

let n = parseInt(prompt("Enter the power n for 2^n (max 256): "));
let i = 0;
let value = 1;

console.log("Powers of 2:");
while (i <= n && value <= 256) {
    console.log(`2^${i} = ${value}`);
    value *= 2;
    i++;
}
// 2. Find the Magic Number

let low = 1;
let high = 100;
let found = false;

console.log("Think of a number between 1 and 100.");
while (!found && low <= high) {
    let mid = Math.floor((low + high) / 2);
    let response = prompt(`Is your number ${mid}? (yes/higher/lower): `);

    if (response === "yes") {
        console.log(`Your magic number is ${mid}!`);
        found = true;
    } else if (response === "higher") {
        low = mid + 1;
    } else if (response === "lower") {
        high = mid - 1;
    } else {
        console.log("Invalid input. Please respond with 'yes', 'higher', or 'lower'.");
    }
}
// 3. Flip Coin Till Heads or Tails Wins 11 Times

let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
    let flip = Math.random() < 0.5 ? "Heads" : "Tails";
    if (flip === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }
    console.log(`Flip: ${flip} | Heads: ${headsCount}, Tails: ${tailsCount}`);
}

console.log(headsCount === 11 ? "Heads wins!" : "Tails wins!");
// 4. Gambler Problem

let money = 100;
let goal = 200;
let bets = 0;
let wins = 0;

while (money > 0 && money < goal) {
    bets++;
    let gamble = Math.random() < 0.5; // Win or lose
    if (gamble) {
        money++;
        wins++;
    } else {
        money--;
    }
    console.log(`Bet ${bets}: ${gamble ? "Win" : "Lose"} | Money: ${money}`);
}

console.log(`Game over! Total bets: ${bets}, Wins: ${wins}, Final money: ${money}`);