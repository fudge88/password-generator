// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// get criteria
// length of password

//looping function

// generate random password

// criteria
upperCase;
lowerCase;
specialCharacter;
digit;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
