// Write a JavaScript program to test the first character of a string is uppercase or not.
// Test data:
// console.log(upper_case('Abcd'));
// console.log(upper_case('Bcd'));
// console.log(upper_case('aBCD'));
// console.log(upper_case('cD'));
// Expected output:
// String's first character is uppercase
// String's first character is uppercase
// String's first character is not uppercase
// String's first character is not uppercase

const upper_case = (str) => {
  const regexp = /^[A-Z]/;

  if (regexp.test(str)) {
    return "String's first character is uppercase";
  } else {
    return "String's first character is not uppercase";
  }
};

console.log(upper_case('Abcd'));
console.log(upper_case('Bcd'));
console.log(upper_case('aBCD'));
console.log(upper_case('cD'));
