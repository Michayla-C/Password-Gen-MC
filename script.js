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
  var special = window.confirm("Secial Characters?");
  var numbers = window.confirm("Numbers?");
  var lower = window.confirm("Lowercase?");
  var upper = window.confirm("Uppercase?");
  
  //No Options Chosen
  if (!special && !numbers && !lower && !upper)
  {
    window.alert("One condition must be chosen");
    return;
  }

  //Only Special Characters Chosen  
  else if (special && !numbers && !lower && !upper) {     
    for (var i = 0, n = specialChars.length; i < passwordLength; ++i) {
      retVal += specialChars.charAt(Math.floor(Math.random() * n));
      }
    console.log(retVal);     
    }

    //Only Numbers Chosen  
    else if (!special && numbers && !lower && !upper) {     
      for (var i = 0, n = numbers.length; i < passwordLength; ++i) {
        retVal += numbers.charAt(Math.floor(Math.random() * n));
      }
    console.log(retVal);     
    }

    //Only Lowercase Chosen  
    else if (!special && !numbers && lower && !upper) {     
      for (var i = 0, n = lowerCase.length; i < passwordLength; ++i) {
        retVal += lowerCase.charAt(Math.floor(Math.random() * n));
      }
    console.log(retVal);     
    }
    
    //Only Uppercase Chosen  
    else if (!special && !numbers && !lower && upper) {     
      for (var i = 0, n = upperCase.length; i < passwordLength; ++i) {
        retVal += upperCase.charAt(Math.floor(Math.random() * n));
      }
    console.log(retVal);     
    }    

    //Special Characters & Numbers Chosen
    else if (special && numbers && !lower && !upper) {
      totalLength = specialChars.concat(numbers);      
      for (var i = 0, n = totalLength.length; i < passwordLength; ++i) {
        retVal += totalLength.charAt(Math.floor(Math.random() * n));
      }
    console.log(retVal);
    }

     //Only Letters Chosen
     else if (!special && !numbers && lower && upper){
      
      totalLength = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      
      for (var i = 0, n = totalLength.length; i < passwordLength; ++i) {
        retVal += totalLength.charAt(Math.floor(Math.random() * n));
      }
    console.log(retVal);
    }

    //Only Special Characters & Lowercase Chosen
    else if (special && !numbers && lower && !upper) {
      
      totalLength = "!@#$%^&*(){}[]=<>/,.|~?abcdefghijklmnopqrstuvwxyz";
      
      for (var i = 0, n = totalLength.length; i < passwordLength; ++i) {
        retVal += totalLength.charAt(Math.floor(Math.random() * n));
      }
      console.log(retVal);
    }

    //Only Special Characters & Uppercase Chosen
    else if (special && !numbers && !lower && upper) {
      
      totalLength = "!@#$%^&*(){}[]=<>/,.|~?ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      
      for (var i = 0, n = totalLength.length; i < passwordLength; ++i) {
        retVal += totalLength.charAt(Math.floor(Math.random() * n));
      }
      console.log(retVal);
    }

    //Only Numbers & Uppercase Chosen
    else if (!special && numbers && !lower && upper) {
      
      totalLength = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      
      for (var i = 0, n = totalLength.length; i < passwordLength; ++i) {
        retVal += totalLength.charAt(Math.floor(Math.random() * n));
      }
      console.log(retVal);
    }

    //Only Numbers & Lowercase Chosen
    else if (!special && numbers && lower && !upper) {
      
      totalLength = "0123456789abcdefghijklmnopqrstuvwxyz";
      
      for (var i = 0, n = totalLength.length; i < passwordLength; ++i) {
        retVal += totalLength.charAt(Math.floor(Math.random() * n));
      }
      console.log(retVal);
    }

    //Special + Numbers & Lowercase Chosen
    else if (special && numbers && lower && !upper) {

      totalLength = "!@#$%^&*(){}[]=<>/,.|~?0123456789abcdefghijklmnopqrstuvwxyz";
      
      for (var i = 0, n = totalLength.length; i < passwordLength; ++i) {
        retVal += totalLength.charAt(Math.floor(Math.random() * n));
      }
    console.log(retVal);
    }

    //Special & Letters Chosen
    else if (special && !numbers && lower && upper) {

      totalLength = "!@#$%^&*(){}[]=<>/,.|~?abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      
      for (var i = 0, n = totalLength.length; i < passwordLength; ++i) {
        retVal += totalLength.charAt(Math.floor(Math.random() * n));
      }
    console.log(retVal);
    }

    //Numbers & Letters Chosen
    else if (!special && numbers && lower && upper) {

      totalLength = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      
      for (var i = 0, n = totalLength.length; i < passwordLength; ++i) {
        retVal += totalLength.charAt(Math.floor(Math.random() * n));
      }
    console.log(retVal);
    }

    //All Chosen
    else {

      totalLength = "!@#$%^&*(){}[]=<>/,.|~?0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

      for (var i = 0, n = totalLength.length; i < passwordLength; ++i) {
        retVal += totalLength.charAt(Math.floor(Math.random() * n));
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
