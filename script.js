// Assignment Code
var generateBtn = document.querySelector("#generate");

//Generate Password Function
var generatePassword = function() {
  var special = "!@#$%^&*(){}[]=<>/,.|~?";
  var numbers ="0123456789";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Return Value
  reVal = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
