// Write a JavaScript function to validate whether a given value type is null or not

// Test Data :
// console.log(is_null(null));
// console.log(is_null('bar'));
// Expected Output :
// true
// false

const is_null = (input) => {
  if (input === null) {
    return true;
  }
  return false;
};

console.log(is_null(null));
console.log(is_null('bar'));
