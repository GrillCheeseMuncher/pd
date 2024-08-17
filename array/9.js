// Write a JavaScript program to compute the sum and product of an array of integers
// Test data:
// console.log(sumAndProduct([1, 2, 3, 4, 5, 6]))
// Expected output:
// Sum: 21 | Product: 720

const sumAndProduct = (input) => {
  // const sum = input.reduce((res, num) => res + num, 0);

  // const product = input.reduce((res, num) => res * num, 1);

  const { sum, product } = input.reduce(
    (res, num) => {
      res.sum += num;
      res.product *= num;

      return res;
    },
    { sum: 0, product: 1 }
  );

  return `Sum: ${sum} | Product: ${product}`;
};

console.log(sumAndProduct([1, 2, 3, 4, 5, 6]));
