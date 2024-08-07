// Write a JavaScript function to generate a random integer from specific range.
// Test Data :
// console.log(rand(20,1));
// console.log(rand(1,10));
// console.log(rand(6));
// console.log(rand())
// Expected Output (random):
// 15
// 5
// 1
// 0

const generateRandom = (min = 0, max = 0) => {
  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(generateRandom(20, 1));
console.log(generateRandom(1, 10));
console.log(generateRandom(6));
console.log(generateRandom());
