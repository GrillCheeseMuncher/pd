// Write a JavaScript program that accept two integers and display the larger
// Test Data :
// console.log(displayLarger(2, 3));
// console.log(displayLarger(3, 2));
// Expected Output :
// 3
// 3

const displayLarger = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  }
  return num2;
};

console.log(displayLarger(2, 3));
console.log(displayLarger(3, 2));
