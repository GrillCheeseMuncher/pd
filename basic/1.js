// Write a JavaScript program to display the current day and time in the following format.
//
// Sample Output:
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const currentDate = new Date();
const days = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela'];
const currentDay = currentDate.getDay(); // here to do something with currentDate
const currentTime = currentDate.getTime(); // here to do something with currentDate

console.log(`Today is: ${days[currentDay - 1]}`);
console.log(`Current time is: ${currentTime}`);
