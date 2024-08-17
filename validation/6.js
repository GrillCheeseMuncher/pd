// Write a JavaScript function to validate whether a given value type is single char or not
// Test data:
// console.log(is_char('f'));
// console.log(is_char('fa'));
// console.log(is_char('*'));
// Expected output:
// true
// false
// true

const is_char = (str) => typeof str === 'string' && str.length === 1;

console.log(is_char('f'));
console.log(is_char('fa'));
console.log(is_char('*'));
