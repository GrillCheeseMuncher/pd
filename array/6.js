// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.
// Test data:
// console.log(strFromNum(254680));
// Expected output:
// 0-254-6-8

const strFromNum = (input) => {
  const str = input + '';

  let result = '';

  for (let i = 0; i < str.length; i++) {
    result += str[i];

    if (i < str.length - 1) {
      if (str[i] % 2 === 0 && str[i + 1] % 2 === 0) {
        result += '-';
      }
    }
  }

  return result;
};

console.log(strFromNum(254680));
