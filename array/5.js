// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Test Data :
// console.log(concatArr(myColor))
// console.log(concatArr(myColor, ','))
// console.log(concatArr(myColor, '+'))
// console.log(concatArr(myColor, '~'))
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
// "Red~Green~White~Black"

const concatArr = (array, n) => array.join(n);

const myColor = ['Red', 'Green', 'White', 'Black'];
console.log(concatArr(myColor));
console.log(concatArr(myColor, ','));
console.log(concatArr(myColor, '+'));
console.log(concatArr(myColor, '~'));
