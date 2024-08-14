// Write a JavaScript function to validate whether a given value is object or not.
// Test data:
// console.log(is_object({ name: "Robert" }));
// console.log(is_object([]));
// console.log(is_object("bar"));
// console.log(is_object(72));
// Expected output:
// true
// false
// false
// false

const is_object = (input) => typeof input === 'object' && !Array.isArray(input);

console.log(is_object({ name: 'Robert' }));
console.log(is_object([]));
console.log(is_object('bar'));
console.log(is_object(72));
