// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// get criteria
const getCriteria = function () {
  const pwLength = Number(prompt("Choose Password length"));
  if (isNaN(pwLength)) {
    return "Not a Valid number!";
  } else {
    return "you have chosen " + pwLength;
  }
};
// eliminate the possibility of a letter instead of a number
// g

// do you want lowercase characters
// do you want uppercase characters
// do you want numeric characters
// do you want special characters

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
