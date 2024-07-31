// Write a JavaScript exercise to get the extension of a filename.
// Test Data :
// console.log(getExtension('file.pdf'));
// console.log(getExtension('pic.jpg'));
// Expected Output :
// pdf
// jpg

const getExtension = (file) => {
  const dotSplit = file.split('.');

  return dotSplit[dotSplit.length - 1];
};

console.log(getExtension('file.pdf'));
console.log(getExtension('pic.jpg'));
