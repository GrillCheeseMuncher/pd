// Write a JavaScript function to check whether given value types are same or not
// Test data:
// console.log(is_sameType('12', 100));
// console.log(is_sameType('12', '100'));
// console.log(is_sameType(12, 100));
// console.log(is_sameType(NaN, NaN));
// Expected output:
// false
// true
// true
// true

const is_sameType = (num1, num2) => typeof num1 === typeof num2;

console.log(is_sameType('12', 100));
console.log(is_sameType('12', '100'));
console.log(is_sameType(12, 100));
console.log(is_sameType(NaN, NaN));
