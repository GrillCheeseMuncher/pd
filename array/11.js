// Write a JavaScript program to shuffle an array.
// Test data:
// console.log(shuffle42([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
// Possible output:
// [7, 0, 1, 2, 9, 3, 4, 5, 8, 6]

const shuffle42 = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

console.log(shuffle42([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
