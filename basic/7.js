//  Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
// Test Data :
// console.log(changeString('Ramadan'));
// console.log(changeString());
// console.log(changeString('Pythooon'));
// console.log(changeString('pythooon'));
// Expected Output :
// PyRamadan
// undefined
// Pythooon
// Pypythooon

const changeString = (str) =>
  str === null || str === undefined || str.substring(0, 2) === 'Py' ? str : 'Py' + str;

console.log(changeString('Ramadan'));
console.log(changeString());
console.log(changeString('Pythooon'));
console.log(changeString('pythooon'));
