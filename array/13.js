// Write a JavaScript program to find duplicate values in a JavaScript array
// Test data:
// console.log(findDuplicates([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));
// Expected Output :
// [ 4, 7 ]

const findDuplicates = (arr) => {
  const newArr = new Set();
  const duplicates = new Set();

  for (const value of arr) {
    if (newArr.has(value)) {
      duplicates.add(value);
    } else {
      newArr.add(value);
    }
  }

  return [...duplicates];
};

console.log(findDuplicates([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));
