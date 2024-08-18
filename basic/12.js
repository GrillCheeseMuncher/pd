// Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string.
// If "Script" presents in the string on the mentioned position, return the string without "Script" otherwise return the original one.
// Test data:
// console.log(scriptCheck('JavaScript'));
// console.log(scriptCheck('.JavaScript'));
// console.log(scriptCheck('Script'));
// console.log(scriptCheck('JavaScriptJava'));
// Expected output:
// Java
// .JavaScript
// Script
// JavaJava

const scriptCheck = (str) => {
  // const test = str.slice(4, 10) === 'Script'
  if (str.indexOf('Script') === 4) {
    return str.slice(0, 4) + str.slice(10);
  } else {
    return str;
  }
};

console.log(scriptCheck('JavaScript'));
console.log(scriptCheck('.JavaScript'));
console.log(scriptCheck('Script'));
console.log(scriptCheck('JavaScriptJava'));
