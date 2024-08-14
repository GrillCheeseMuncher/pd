// Write a JavaScript program to find the most frequent item of an array.
// Test data:
// console.log(findTheMost([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
// console.log(findTheMost([3, "a", "a", 4, 9, 3, 2, 4, 9, 3, 2, 4, 9, 3, 2, 4, 9, 3, 2, 4, 9, 3]));
// Expected Output:
// a ( 5 times )
// 3 ( 6 times )

const findTheMost = (arr) => {
  const frequency = {};

  arr.map((item) => {
    if (frequency[item]) {
      frequency[item]++;
    } else {
      frequency[item] = 1;
    }
  });

  let mostFrequentItem = null;

  let maxCount = 0;

  for (const item in frequency) {
    if (frequency[item] > maxCount) {
      maxCount = frequency[item];
      mostFrequentItem = item;
    }
  }

  return `${mostFrequentItem} ( ${maxCount} times )`;
};

console.log(findTheMost([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
console.log(findTheMost([3, 'a', 'a', 4, 9, 3, 2, 4, 9, 3, 2, 4, 9, 3, 2, 4, 9, 3, 2, 4, 9, 3]));
