// Write a JavaScript conditional statement to find the sign of product of three numbers.
// Test Data :
// console.log(findSign(3, 7, 2));
// console.log(findSign(3, -7, 2));
// Expected Output :
// The sign is +
// The sign is -

const findSign = (a, b, c) => (a * b * c > 0 ? '+' : '-');

console.log(findSign(3, 7, 2));
console.log(findSign(3, -7, 2));
