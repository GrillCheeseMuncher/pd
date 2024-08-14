// Write a JavaScript function to convert an amount to coins.
// Test data:
// console.log(amountToCoins(46, [25, 10, 5, 2, 1]));
// console.log(amountToCoins(0, [25, 10, 5, 2, 1]));
// console.log(amountToCoins(18, [25, 10, 5, 1]));
// Expected output:
// Sum is 46, and coins in this sume are: 25,10,10,1
// Sum is 0
// Sum is 18, and coins in this sume are: 10,5,1,1,1

const amountToCoins = (amount, coins) => {
  const result = [];

  for (const coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      result.push(coin);
    }
  }

  if (result.length > 0) {
    return `Sum is ${result.reduce((a, b) => a + b)}, and coins in this sume are: ${result.join(
      ','
    )}`;
  } else {
    return `Sum is 0`;
  }
};

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));
console.log(amountToCoins(0, [25, 10, 5, 2, 1]));
console.log(amountToCoins(18, [25, 10, 5, 1]));
