// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// Test Data :
// console.log(protect_email("robin_hood@example.com"));
// "robin...@example.com"

const protect_email = (str) => {
  const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [name, domain] = str.split('@');
  // const protectNameValue = name.length <= 10 ? name.length / 2 : name.length / 3;
  const protectName = name.slice(0, 5) + '...';

  return regexp.test(str) ? `${protectName}@${domain}` : str;
};

console.log(protect_email('robin_hood@example.com'));
console.log(protect_email('maciekwisniewski16@example.com'));
console.log(protect_email('maciekwisaofijasidoljfkplasdmflksjflkjsdikfjsniewski16@example.com'));
