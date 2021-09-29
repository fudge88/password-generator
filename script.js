// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

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

// do you want lowercase characters
function lowerCase() {}
// do you want uppercase characters
function UpperCase() {}
// do you want numeric characters
function num() {}
// do you want special characters
function special() {}

// looping function
const generatePassword = function () {
  return;
};

// generate password
const displayPassword = function () {
  return;
};

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// get user criteria

const pwLength = getCriteria();
console.log(pwLength);
