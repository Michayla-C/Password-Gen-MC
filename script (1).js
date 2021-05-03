// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// My code
var howLong = window.prompt ("choose a password length between 8 and 128")
if ( parseInt (howLong) >= 8 && parseInt(howLong) <= 128) {
  OneValue = howLong
}
else {
  window.alert ("You did not imput a valid number. Press 'OK' and start again!")
  run()
}