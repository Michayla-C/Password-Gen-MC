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

  var passwordLength = window.prompt("Password Length");
 ;
  }
 //Password Length not chosen
 if (!passwordLength) {
  window.alert("Specify Password Length");
  return;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
