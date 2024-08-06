//  Write a JavaScript program to remove a character at the specified position of a given string and return the new string
// Test Data :
// console.log(createNew('bobek', 3));
// console.log(createNew('bobek', 9));
// console.log(createNew('bobek', 0));
// Expected Output :
// bobk
// undefined
// obek

const createNew = (str, num) =>
  num >= str.length ? undefined : str.slice(0, num) + str.slice(num + 1);

console.log(createNew('bobek', 3));
console.log(createNew('bobek', 9));
console.log(createNew('bobek', 0));
