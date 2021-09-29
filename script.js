// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// Arrays
const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = [
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
const lowerCase = [
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

const upperCase = lowerCase.join("").toUpperCase();
const upperCase = upperCase.split("");

// get criteria
// get password length ***works****
const getCriteria = function () {
  const pwLength = Number(prompt("Choose Password length"));
  // eliminate the possibility of a letter instead of a number
  if (isNaN(pwLength)) {
    return "Not a Valid number!";
  } else {
    return "you have chosen " + pwLength;
  }
};

// length requirement function works
function validate(pwLength) {
  if (pwLength >= 0 && typeof pwLength === "number") {
    return true;
  } else {
    return false;
  }
}

// length of password
const pwLength = 9; //using constant this works
if (validate(pwLength)) {
  if (pwLength >= 8 && pwLength <= 128) {
    console.log("correct length input");
  } else {
    console.log("Incorrect length input");
  }
}

// // do you want lowercase characters
// function lowerCase() {}
// // do you want uppercase characters
// function UpperCase() {}
// // do you want numeric characters
// function num() {}
// // do you want special characters
// function special() {}

// // looping function
// const generatePassword = function () {
//   return;
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
