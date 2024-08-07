//  Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back
// Test Data :
// console.log(addedLetter('bob'));
// console.log(addedLetter('bo'));
// console.log(addedLetter('b'));
// console.log(addedLetter(''));
// console.log(addedLetter('baaaaaaaaaaaaaaaaaaaaaaaaaaab'));
// Expected Output :
// bbobb
// bbob
// bbb
// undefined
// bbaaaaaaaaaaaaaaaaaaaaaaaaaaabb

const addedLetter = (str) => (!str.length ? undefined : str[0] + str + str[0]);

console.log(addedLetter('bob'));
console.log(addedLetter('bo'));
console.log(addedLetter('b'));
console.log(addedLetter(''));
console.log(addedLetter('baaaaaaaaaaaaaaaaaaaaaaaaaaab'));
