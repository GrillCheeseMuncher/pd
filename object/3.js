// Write a JavaScript program which returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

const getSubStr = (str) => {
  const substr = [];

  for (let start = 0; start < str.length; start++) {
    for (let end = start + 1; end <= str.length; end++) {
      substr.push(str.substring(start, end));
    }
  }

  return substr;
};

console.log(getSubStr('dog'));
