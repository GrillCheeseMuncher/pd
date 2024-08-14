// Write a JavaScript program to construct the following pattern, using a nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

// NOTE:  every line is a new console log

const createPattern = () => {
  const lines = 5;

  for (let x = 1; x <= lines; x++) {
    let line = '';

    for (let y = 1; y <= x; y++) {
      line += '* ';
    }

    console.log(line);
  }
};

createPattern();
