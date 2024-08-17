//  Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive).
// Return true if one or more of them are in the said range.
// Test data:
// console.log(checkRange(55, 66, 77));
// console.log(checkRange(45, 66, 333));
// console.log(checkRange(45, 121, 1));
// Expected output:
// true
// true
// false

const checkRange = (num1, num2, num3) => {
  const min = 50;
  const max = 99;

  return (
    (num1 >= min && num1 <= max) || (num2 >= min && num2 <= max) || (num3 >= min && num3 <= max)
  );
};

console.log(checkRange(55, 66, 77));
console.log(checkRange(45, 66, 333));
console.log(checkRange(45, 121, 1));
