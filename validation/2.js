// Write a JavaScript function to validate whether a given value type is NaN or not

// Test Data :
// console.log(is_nan(NaN));
// console.log(is_nan('bar'));
// Expected Output :
// true
// false

const is_nan = (input) => input !== input;

console.log(is_nan(NaN));
console.log(is_nan('bar'));
