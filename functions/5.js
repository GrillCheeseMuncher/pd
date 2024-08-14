// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Test data:
// console.log(storedArr([1, 2, 3, 4, 5]));
// console.log(storedArr([6, 7, 2, 5, 1]));
// console.log(storedArr([55, 56, 53, 52, 48, 65, 80, 90, 85]));
// Expected Output:
// 2, 4
// 2, 6
// 52, 85

const storedArr = (input) => {
  const clone = [...input];

  clone.sort((a, b) => a - b);

  const secondLowest = clone[1];
  const secondGreatest = clone[clone.length - 2];

  return `${secondLowest}, ${secondGreatest}`;
};

console.log(storedArr([1, 2, 3, 4, 5]));
console.log(storedArr([6, 7, 2, 5, 1]));
console.log(storedArr([55, 56, 53, 52, 48, 65, 80, 90, 85]));
