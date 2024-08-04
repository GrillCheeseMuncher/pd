// Write a JavaScript function to check whether an `input` is a string or not.
// Test Data :
// console.log(is_string('Bob'));
// console.log(is_string([1, 2, 4, 0]));
// Expected Output :
// true
// false

// const is_string = (input) => Object.prototype.toString.call(input) === '[object String]';
const is_string = (input) => typeof input === 'number';

console.log(is_string('Bob'));
console.log(is_string([1, 2, 4, 0]));
