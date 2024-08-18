//  Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive).
// Return true if one or more of them are in the said range.
// Test data:
// console.log(checkRange(55, 66, 77));
// console.log(checkRange(45, 66, 333));
// console.log(checkRange(45, 121, 1));
// Expected output:
// true
// true
// false

const check = (num) => num >= 50 && num <= 99;

const checkRange = (num1, num2, num3) => check(num1) || check(num2) || check(num3);

console.log(checkRange(55, 66, 77));
console.log(checkRange(45, 66, 333));
console.log(checkRange(45, 121, 1));
