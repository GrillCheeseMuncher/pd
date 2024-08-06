// Write a JavaScript function to find the highest value in an array.
// Test Data :
// console.log(max([12,34,56,1]));
// console.log(max([-12,-34,0,-56,-1]));
// Expected Output :
// 56
// 0

const takeMax = (n) => Math.max(...n);

console.log(takeMax([12, 34, 56, 1]));
console.log(takeMax([-12, -34, 0, -56, -1]));
