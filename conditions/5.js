// Write a JavaScript program which compute, the average marks of the following students
// Then, this average is used to determine the corresponding grade.
// Test data:
// console.log(findAverage(students));
// Expected output:
// Average grade: 81.6 (5)

// NOTE: grades marks
// [100 - 90] -> 6
// [90 - 80] -> 5
// [80 - 70] -> 4
// [70 - 60] -> 3
// [60 - 50] -> 2
// [50 - 0] -> 1

const findAverage = (students) => {
  const totalMarks = students.reduce((total, [, marks]) => total + marks, 0);

  const average = totalMarks / students.length;
  let grade;
  if (average >= 90) {
    grade = 6;
  } else if (average >= 80) {
    grade = 5;
  } else if (average >= 70) {
    grade = 4;
  } else if (average >= 60) {
    grade = 3;
  } else if (average >= 50) {
    grade = 2;
  } else {
    grade = 1;
  }

  return `Average grade: ${average.toFixed(1)} (${grade})`;
};

const students = [
  ['David', 80],
  ['Vinoth', 77],
  ['Divya', 88],
  ['Ishitha', 95],
  ['Thomas', 68],
];

console.log(findAverage(students));
