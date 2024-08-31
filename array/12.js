// There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
// Test data:
// console.log(combineTwoArr([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));
// console.log(combineTwoArr([1, 0, 2, 3, 4], [3, 5, 6]));
// Expected Output :
// [ 4, 5, 8, 10, 12, 13 ]
// [ 4, 5, 8, 3, 4 ]

const combineTwoArr = (arr1, arr2) => {
  const maxLength = Math.max(arr1.length, arr2.length);
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    const num1 = arr1[i] !== undefined ? arr1[i] : 0;
    const num2 = arr2[i] !== undefined ? arr2[i] : 0;
    result.push(num1 + num2);
  }

  return result;
};

console.log(combineTwoArr([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));
console.log(combineTwoArr([1, 0, 2, 3, 4], [3, 5, 6]));
