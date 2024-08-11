// Write a JavaScript program to sort an array of JavaScript objects
// test data:
// const libraryToSort;
// Expected output:
// [
//   {
//     title: 'Walter Isaacson',
//     author: 'Steve Jobs',
//     libraryID: 4264,
//   },
//   {
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     author: 'Suzanne Collins',
//     libraryID: 3245,
//   },
//   {
//     title: 'The Road Ahead',
//     author: 'Bill Gates',
//     libraryID: 1254,
//   },
// ];

const libraryToSort = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245,
  },
];

const sortThisLib = (arr) => arr.sort((a, b) => a.libraryID - b.libraryID);

console.log(sortThisLib(libraryToSort));
