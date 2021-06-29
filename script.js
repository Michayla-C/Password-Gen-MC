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
  var specialConfirm = window.confirm("Secial Characters?");
  var numbersConfirm = window.confirm("Numbers?");
  var lowerConfirm = window.confirm("Lowercase?");
  var upperConfirm = window.confirm("Uppercase?");
  
  //No Options Chosen
  if (!specialonfirm && !numbersConfirm && !loweronfirm && !upperConfirm)
  {
    window.alert("One condition must be chosen");
    return;
  }

  //Only Special Characters Chosen  
  else if (specialConfirm && !numbersConfirm && !lowerConfirm && !upperConfirm) {     
    for (var i = 0, n = specialChars.length; i < passwordLength; ++i) {
      retVal += specialChars.charAt(Math.floor(Math.random() * n));
      }
    console.log(retVal);     
    }

    //Only Numbers Chosen  
    else if (!specialConfirm && numbersConfirm && !lowerConfirm && !upperConfirm) {     
      for (var i = 0, n = numbers.length; i < passwordLength; ++i) {
        retVal += numbers.charAt(Math.floor(Math.random() * n));
      }
    console.log(retVal);     
    }

    //Only Lowercase Chosen  
    else if (!specialConfirm && !numbersConfirm && lowerConfirm && !upperConfirm) {     
      for (var i = 0, n = lowerCase.length; i < passwordLength; ++i) {
        retVal += lowerCase.charAt(Math.floor(Math.random() * n));
      }
    console.log(retVal);     
    }
    
    //Only Uppercase Chosen  
    else if (!specialConfirm && !numbersConfirm && !lowerConfirm && upperConfirm) {     
      for (var i = 0, n = upperCase.length; i < passwordLength; ++i) {
        retVal += upperCase.charAt(Math.floor(Math.random() * n));
      }
    console.log(retVal);     
    }    

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
