// Write a JavaScript function to format a number up to specified decimal places.
// Test Data :
// console.log(decimals(2.100212, 2));
// console.log(decimals(2.100212, 3));
// console.log(decimals(2100, 2));
// Expected Output :
// "2.10"
// "2.100"
// "2100.00"

const decimals = (num1, num2) => num1.toFixed(num2);

console.log(decimals(2.100212, 2));
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));
