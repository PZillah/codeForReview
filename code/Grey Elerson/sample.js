// Convert a number into an array of digits.
// Like String.split() for numbers
const convertToArray = (number) => [..."${number}"].map((num) => Number(num));

// Generate random colors without a code library
var randomColor = Math.floor(Math.random() * 16777215).toString(16);

// Removing duplicates from an array using reduce or filter
const array = [1, 1, 1, 3, 3, 2, 2];

const unique1 = array.reduce((result, element) => {
  return result.includes(element) ? result : [...result, element];
}, []);

const unique2 = array.filter((element, index) => {
  return array.indexOf(element) === index;
});

// It doesn't matter what the code you found does. The goal is to show the class
// something new they can do with JS and to practice understanding how that is
// achieved with code. 