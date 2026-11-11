const name = "Ayden";
console.log("Welcome to " + name + "'s portfolio");
const greeting = "Hello, " + name + "! This is my JavaScript portfolio";
console.log(greeting);
window.firstNumber = 7;
window.secondNumber = 2;

function calculate(firstNumber = window.firstNumber, secondNumber = window.secondNumber) {
  console.log("Sum:", firstNumber + secondNumber);
  console.log("Difference:", firstNumber - secondNumber);
  console.log("Product:", firstNumber * secondNumber);
  console.log("Quotient:", firstNumber / secondNumber);
  console.log("Rounded quotient:", Math.round(firstNumber / secondNumber));
  console.log("Remainder:", firstNumber % secondNumber);
}

console.log("Try different numbers in DevTools Console with calculate(10, 4).");
calculate();
console.log("Current year:", new Date().getFullYear());

for (let i = 1; i <= 3; i++) {
  if (i === 2) continue;
  console.log(i);
}

let score = 92;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
