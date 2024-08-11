// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books
// sample objedt:
// const libraryBooks;
// sample output:
// Already read 'The Road Ahead' by Bill Gates.
// Already read 'Walter Isaacson' by Steve Jobs.
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

const libraryBooks = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  },
];

const readingStatus = (obj) =>
  obj
    .map((book) => {
      if (book.readingStatus) {
        return `Already read '${book.title}' by ${book.author}.`;
      } else {
        return `You still need to read '${book.title}' by ${book.author}.`;
      }
    })
    .join('\n');

console.log(readingStatus(libraryBooks));
