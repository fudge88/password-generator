// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays
const numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialArray = [
  "!",
  "£",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "?",
  "@",
  "#",
  "~",
  "|",
  "/",
  ".",
  ",",
  "<",
  ">",
  '"',
  ":",
  " ",
  ";",
  "`",
  "¬",
];
const lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// convert lower case to uppercase array
const upperCase = lowerCaseArray.join("").toUpperCase();
const upperCaseArray = upperCase.split("");

// get criteria
// Function - prompt user to select password characteristics
const getCriteria = function () {
  // created a variable x which will hold the users numerical input
  const x = prompt("Choose Password length");
  // variable is converted to a number and passed into a new variable called passwordLength
  const passwordLength = parseInt(x, 10);
  // checks if the value passed is a number,
  if (Number.isNaN(passwordLength)) {
    // if it is not a number the return the following message
    alert("Please enter a valid number");
    // then break away
    return;
  }

  // length requirement error handler
  if (passwordLength < 8 || passwordLength > 128) {
    // if number is of an incorrect length the return the following message
    alert("Please enter a number between 8-128");
    // then break away
    return;
  }

  // variable assigning each criteria the user can choose from
  // Confirmation box - pop up asking user for boolean data type in return
  const lowerCase = confirm("Password to contain lowercase characters?");
  const upperCase = confirm("Password to contain uppercase characters?");
  const specialChar = confirm("Password to contain special characters?");
  const numChar = confirm("Password to contain numbers?");
  // created an object called 'attributes', holding all the variables the user will return
  const attributes = {
    passwordLength: passwordLength,
    lowerCase: lowerCase,
    upperCase: upperCase,
    specialChar: specialChar,
    numChar: numChar,
  };
  return attributes;
};

// function that generates the password according to user choices
const generatePassword = function () {
  // call on getCriteria function to use variables
  const attributes = getCriteria();
  // empty array that will hold the arrays the user wishes to use
  const containerArray = [];
  // if user has received error message finishes the function
  if (!attributes) {
    return;
  }
  // if the named attributes are selected, push into the empty array using the spread function
  // container array goes first as thats the container we want to fill, push is the function to add,
  // the ...is the spread function that we attach to the array we are forcing into a new array.

  // if in the object attributes the variable of upperCase is present add the lowercase array to the empty array
  if (attributes.upperCase) {
    containerArray.push(...upperCaseArray);
  }
  if (attributes.lowerCase) {
    containerArray.push(...lowerCaseArray);
  }
  if (attributes.numChar) {
    containerArray.push(...numArray);
  }
  if (attributes.specialChar) {
    containerArray.push(...specialArray);
  }
  // if the user has NOT picked any attributes display error message
  if (!containerArray.length) {
    alert("You MUST choose at least one type of character");
    // break off
    return;
  }

  //  empty array that will holder users random password
  const passwordArray = [];

  // for loop
  // index to start at 0, targeting the attributes object and the passwordLength variable to get number of characters
  // and for the function to be incremented until the password length is met
  for (let i = 0; i < attributes.passwordLength; i++) {
    // variable called randomIndex, (rounding down) random whole number found in the length of the
    // containerArray which contains all the users chosen attributes
    const randomIndex = Math.floor(Math.random() * containerArray.length);
    // variable called randomChar  takes on the value on the randomIndex from tehe containerArray
    const randomChar = containerArray[randomIndex];
    // pushing the randomChar into the passwordArray
    passwordArray.push(randomChar);
  }
  // this turns the array into a string
  const password = passwordArray.join("");
  // creates password
  return password;
};

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // if password is undefined, show as nothing
  if (!password) {
    password = "";
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
