// Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).
// Test Data :
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
// Output :
// "Date1 = Date2"
// "Date1 > Date2"
// "Date2 > Date1"

const compare_dates = (input1, input2) => {
  const date1 = input1.getTime();
  const date2 = input2.getTime();

  if (date1 === date2) {
    return 'Date1 = Date2';
  } else if (date1 > date2) {
    return 'Date1 > Date2';
  } else {
    return 'Date2 > Date1';
  }
};

console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
