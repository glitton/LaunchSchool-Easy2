const input = require("readline-sync");

const firstNumber = parseFloat(input.question("Enter the first number: "));
const secondNumber = parseFloat(input.question("Enter the second number: "));

console.log(`Addition:  ${firstNumber + secondNumber}`);
console.log(`Substraction:  ${firstNumber - secondNumber}`);
console.log(`Multiplication:  ${firstNumber * secondNumber}`);
console.log(`Division:  ${Math.floor(firstNumber / secondNumber)}`);
console.log(`Remainder:  ${firstNumber % secondNumber}`);
console.log(`Power:  ${firstNumber ** secondNumber}`);
