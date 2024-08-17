// Write a JavaScript function to convert a string in abbreviated form.
// console.log(abbrev_name("Robin Singh"));
// "Robin H."

const abbrev_name = (str) => {
  const [name, surname] = str.split(' ');

  return `${name} ${surname[0]}.`;
};

console.log(abbrev_name('Robin Hood'));
