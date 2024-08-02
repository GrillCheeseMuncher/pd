// Write a JavaScript conditional statement to find the largest of five numbers.
// Display an alert box to show the result.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

const filterBigger = (num1, num2, num3, num4, num5) => {
  const biggest = Math.max(num1, num2, num3, num4, num5);
  console.log(`The biggest number is ${biggest}`);
  return biggest;
};

console.log(filterBigger(-5, -2, -6, 0, -1));
