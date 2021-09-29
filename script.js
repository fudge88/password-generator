// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

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
  "'",
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

// const upperCaseArray = lowerCaseArray.join("").toUpperCase();
// const upperCaseArray = upperCaseArray.split("");

// // get criteria
// // get password length ***works****
// const getCriteria = function () {
//   const pwLength = Number(prompt("Choose Password length"));
//   // eliminate the possibility of a letter instead of a number
//   if (isNaN(pwLength)) {
//     return "Not a Valid number!";
//   } else {
//     return "you have chosen " + pwLength;
//   }
// };

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
var upperCase = true;
var lowerCase = true;
var num = true;
var special = true;

// // do you want uppercase characters
prompt("Do you want an Uppercase character");
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
