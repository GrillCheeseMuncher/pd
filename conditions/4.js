// Write a JavaScript for loop that will iterate from 0 to 15.
// For each iteration, it will check if the current number is odd or even, and console log a message.
// "0 is even"
// "1 is odd"
// "2 is even"

const doLoop = () => {
  for (n = 0; n <= 15; n++) {
    if (n === 0) console.log(n + ' is even');
    else if (n % 2 === 0) console.log(n + ' is even');
    else console.log(n + ' is odd');
  }
};

doLoop();
