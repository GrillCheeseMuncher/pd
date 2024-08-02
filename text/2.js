// Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// Expected Output :
// true
// false

const is_Blank = (string) => {
  if (string.length === 0) {
    return true;
  }
  return false;
};

console.log(is_Blank(''));
console.log(is_Blank('abc'));
