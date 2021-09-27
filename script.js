// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// declare validation function
function validate(pwLength) {
  if (pwLength >= 0 && typeof pwLength === "number") {
    return true;
  } else {
    return false;
  }
}

// get criteria
// length of password
const pwLength = 3;

if (validate(pwLength)) {
  if (pwLength >= 8 && pwLength <= 128) {
    console.log("correct length input");
  } else {
    console.log("Incorrect length input");
  }
}

// looping function

// generate random password

// criteria

// const lowerCase = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
// const specialCharacter = ["!", "£", "$", "&", "*", ".", "?", "@", "#", "/"];
// const digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
