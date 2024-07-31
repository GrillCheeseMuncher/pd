// Write a JavaScript program to display the current day and time in the following format.
//
// Sample Output:
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const currentDate = new Date();

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const currentDay = currentDate.getDay(); // here to do something with currentDate

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

const ampm = hours >= 12 ? 'PM' : 'AM';
const fixedMinutes = minutes < 10 ? '0' + minutes : minutes;
const fixedSeconds = seconds < 10 ? '0' + seconds : seconds;

const twelveClock = hours % 12 || 12;

const currentTime = `${twelveClock} ${ampm} : ${fixedMinutes} : ${fixedSeconds}`; // here to do something with currentDate

console.log(`Today is : ${days[currentDay - 1]}.`);
console.log(`Current time is : ${currentTime}`);
