// Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys
// Test data:
// console.log(invert_key_value({ two: 'dwa', ten: 'dec', white: 'FFFFFF' }));
// Output: { dwa: 'two', dec: 'ten', FFFFFF: 'white' }

const invert_key_value = (obj) =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));

console.log(invert_key_value({ two: 'dwa', ten: 'dec', white: 'FFFFFF' }));
