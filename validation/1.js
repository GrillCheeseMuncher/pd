// Write a JavaScript function to validate whether a given value type is boolean or not
// Test Data :
// console.log(isParamBoolean('text'));
// console.log(isParamBoolean(true));
// Expected Output :
// false
// true

const isParamBoolean = (input) => typeof input === 'boolean';

console.log(isParamBoolean('text'));
console.log(isParamBoolean(true));
