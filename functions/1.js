// Write a JavaScript function that reverse a number.
// Test Data :
// console.log(rewerseNum(32243));
// console.log(rewerseNum(123456));
// Expected Output :
// 34223
// 654321

const rewerseNum = (n) => {
  n = n + '';
  return n.split('').reverse().join('');
};

console.log(rewerseNum(32243));
console.log(rewerseNum(123456));
