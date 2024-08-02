// Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Bob Marley",5));
// Expected Output :
// "Bob M"

const truncate_string = (string, n) => {
  return string.substr(0, n);
};

console.log(truncate_string('Bob Marley', 5));
