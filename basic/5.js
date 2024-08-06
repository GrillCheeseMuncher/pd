// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400
// Test Data :
// console.log(checkWithin(20));
// console.log(checkWithin(9));
// console.log(checkWithin(99));
// console.log(checkWithin(299));
// console.log(checkWithin(599));
// Expected Output :
// true
// false
// true
// true
// false

const checkWithin = (n) => n >= 20 && n <= 400;

console.log(checkWithin(20));
console.log(checkWithin(9));
console.log(checkWithin(99));
console.log(checkWithin(299));
console.log(checkWithin(599));
