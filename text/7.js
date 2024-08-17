// Write a JavaScript function to convert a string into camel case.
// Test Data :
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));
// console.log(camelize('JavaScript_Exercises'));
// console.log(camelize('JavaScript-Exercises'));
// Expected output:
// "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"

const camelize = (str) => {
  return str.replace(/\W+(.)/g, function (match, chr) {
    return chr.toUpperCase();
  });
};

console.log(camelize('JavaScript Exercises'));
console.log(camelize('JavaScript exercises'));
console.log(camelize('JavaScriptExercises'));
console.log(camelize('JavaScript_Exercises'));
console.log(camelize('JavaScript-Exercises'));
