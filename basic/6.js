// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
// Test Data :
// console.log(numberCheck(1, -2));
// console.log(numberCheck(-3, 4));
// console.log(numberCheck(3, 4));
// console.log(numberCheck(-3, -4));
// Expected Output :
// true
// true
// false
// false

const numberCheck = (num1, num2) => (num1 > 0 && num2 < 0) || (num2 > 0 && num1 < 0);
console.log(numberCheck(1, -2));
console.log(numberCheck(-3, 4));
console.log(numberCheck(3, 4));
console.log(numberCheck(-3, -4));
