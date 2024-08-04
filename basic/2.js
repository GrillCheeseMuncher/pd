// Write a JavaScript program to get the current date.
//
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const currentDate = new Date();

// const day = currentDate.getDay();
// const month = currentDate.getMonth();
// const year = currentDate.getFullYear();

// const fixedDay = day < 10 ? '0' + day : day;
// const fixedMonth = month < 10 ? '0' + month : month;

// const formattedDate = `${fixedDay}-${fixedMonth}-${year}`; // here to do something with currentDate
const formattedDate = currentDate.toLocaleDateString('pl-Pl'); // here to do something with currentDate

console.log(formattedDate);
