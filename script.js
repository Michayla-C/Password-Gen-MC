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
  //Password Length not chosen
  if (!passwordLength) {
    window.alert("Specify Password Length");
    return;
  }

  //Password Length Less than 8
  if (passwordLength<8) {
    window.alert("Password must be more than 8 characters");
    return
  }

  //Password Length Greater than 128
  if (passwordLength>128)
  {
    window.alert("Password must be less than 128 characters");
  return;
  }

  //Password Characters
  var specialConfirm = window.confirm("Do you want special chars?");
  var numbersConfirm = window.confirm("Do you want numbers?");
  var lowerConfirm = window.confirm("Do you want lower case alphabets?");
  var upperConfirm = window.confirm("Do you want upper case alphabets?");
  
  //If no Options Chosen
  if (!specialonfirm && !numbersConfirm && !loweronfirm && !upperConfirm)
  {
    window.alert("One condition must be chosen");
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
