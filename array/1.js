// Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('Hakuna Matata'));
// console.log(is_array([1, 2, 4, 0]));
// Expected Output :
// false
// true

const is_array = (input) => Array.isArray(input);

console.log(is_array('Hakuna Matata'));
console.log(is_array([1, 2, 4, 0]));
