// Write a JavaScript function to check whether an object contains given property
// Test Data:
// console.log(hasKey({ red: '#FF0000', green: '#00FF00', white: '#FFFFFF' }, 'green'));
// console.log(hasKey({ red: '#FF0000', green: '#00FF00', white: '#FFFFFF' }, 'greeen'));
// Output:
// true
// false

const hasKey = (obj, str) => str in obj;

console.log(hasKey({ red: '#FF0000', green: '#00FF00', white: '#FFFFFF' }, 'green'));
console.log(hasKey({ red: '#FF0000', green: '#00FF00', white: '#FFFFFF' }, 'greeen'));
