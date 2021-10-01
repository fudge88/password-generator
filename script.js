// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// Arrays
const numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialArray = [
  '!',
  '£',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '?',
  '@',
  '#',
  '~',
  '|',
  '/',
  '.',
  ',',
  '<',
  '>',
  '"',
  ':',
  ' ',
  ';',
  '`',
  '¬',
];
const lowerCaseArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const upperCaseArray = lowerCaseArray.join("").toUpperCase();
const upperCaseArray = upperCaseArray.split("");

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
    alert ("Please enter a valid number");
    // then break away
 return;
}

// length requirement error handler
  if (passwordLength < 8  || passwordLength > 128) {
    // if number is of an incorrect length the return the following message
    alert ("Please enter a number between 8-128");
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

const getUpperCase = function () {
  const upperCase = confirm("Would you like to use uppercase characters?");
  if (upperCase === true) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};

// function that generates the password according to user choices
const generatePassword = function () {
  // empty array that will hold the arrays the user wishes to use
  const containerArray = [];
  // if user has received error message finishes the function
  if (!attributes) {
    return;


  if (upperCase === true) {
    console.log("you want an uppercase character");
  } 

if (lowerCase === true) {
  console.log("you want an lowercase character");
} 


if (num === true) {
  console.log("you want an numerical character");
}


if (special === true) {
  console.log("you want an special character");

}
// // do you want numeric characters
// function num() {}
// // do you want special characters
// function special() {}

// // looping function
var i = 0;
for (i = 0; i < pwLength.length; i++) {
  // get a random character from uppercase array
  var upperCaseCharacter = upperCaseArray.charAt(
    Math.floor(Math.random() * upperCaseArray.length)
  );
  // get a random character from lowercase array
  var lowerCaseCharacter = lowerCaseArray.charAt(
    Math.floor(Math.random() * lowerCaseArray.length)
  );
  // get a random character from special character array
  var specialCharacter = specialArray.charAt(
    Math.floor(Math.random() * specialArray.length)
  );
  // get a random character from numeric array
  var numberCharacter = numArray.charAt(
    Math.floor(Math.random() * numArray.length)
  );
}
// };

// // generate password
// const displayPassword = function () {
//   return;
// };

// // Add event listener to generate button
// // generateBtn.addEventListener("click", writePassword);

// // get user criteria

// const pwLength = getCriteria();
// console.log(pwLength);
