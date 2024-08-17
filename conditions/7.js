// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
// Test data:
// console.log(multiplyAll())
// Expected output:
// 233168

// const multiplyAll = () =>
//   Array.from({ length: 1000 }, (_, i) => i)
//     .filter((i) => i % 3 === 0 || i % 5 === 0)
//     .reduce((sum, i) => sum + i, 0);

const multiplyAll = () => {
  let sum = 0;

  for (let x = 0; x < 1000; x++) {
    if (x % 3 === 0 || x % 5 === 0) {
      sum += x;
    }
  }

  return sum;
};

console.log(multiplyAll());
