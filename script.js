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
  if (number.isNaN(passwordLength)) {
    // if it is not a number the return the following message
    return "Please enter a valid number";
  } else {
    return "you have chosen " + pwLength;
  }
};

// length requirement function works
// function validate(pwLength) {
//   if (pwLength >= 0 && typeof pwLength === "number") {
//     return true;
//   } else {
//     return false;
//   }
// }

// length of password
// const pwLength = 9; //using constant this works
// if (validate(pwLength)) {
//   if (pwLength >= 8 && pwLength <= 128) {
//     console.log("correct length input");
//   } else {
//     console.log("Please input Password length between 8 -128");
//   }
// }

// // do you want lowercase characters
var upperCase = "";
var lowerCase = "";
var num = "";
var special = "";

// // do you want uppercase characters


const getUpperCase = function () {
  const upperCase = confirm("Would you like to use uppercase characters?");
  if (upperCase === true) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};

const getUpperCase = function () {
  const = prompt("Do you want an Uppercase character");
  if (upperCase === true) {
    console.log("you want an uppercase character");
  } else {
    console.log("you NO NOT want an uppercase character");
}

prompt("Do you want an Lowercase character");
if (lowerCase === true) {
  console.log("you want an lowercase character");
} else {
  console.log("you NO NOT want an lowercase character");
}

prompt("Do you want an Numerical character");
if (num === true) {
  console.log("you want an numerical character");
} else {
  console.log("you NO NOT want an numerical character");
}

prompt("Do you want an Special character");
if (special === true) {
  console.log("you want an special character");
} else {
  console.log("you NO NOT want an special character");
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
