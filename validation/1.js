// Write a JavaScript function to validate whether a given value type is boolean or not
// Test Data :
// console.log(isParamBoolean('text'));
// console.log(isParamBoolean(true));
// Expected Output :
// false
// true

const isParamBoolean = (input) => {
  return Object.prototype.toString.call(input) === '[object Boolean]';
};

console.log(isParamBoolean('text'));
console.log(isParamBoolean(true));
