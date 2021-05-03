var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$^&%*()+=-[]{}|:<>?,.';
var numbers = '1234567890';

var pwd = '';

var lowerSelection = false;
var upperSelection = false;
var specialSelection = false;
var numberSelection = false;

//Generate random password

function generate() {
    var confirmLength = '';

  //Character length
    while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
        confirmLength = prompt("Choose a number between 8 & 128");
        if (confirmLength === null) {
            break;
        }
    }

//Character types
    if (confirmLength) {
        if (confirm("Would you like lowercase characters?") == true) {
            lowerSelection = true
        } 

        if (confirm("Would you like uppercase characters?") == true) {
            upperSelection = true
        }

        if (confirm("Would you like special characters?") == true) {
            specialSelection = true
        }

        if (confirm("Would you like numerical characters?") == true) {
            numberSelection = true
        }

  //Alerts user
        if (lowerSelection === false && upperSelection === false && specialSelection === false && numberSelection === false) {
            alert("At least one character type must be selected!")
        }
    }

//Generate password
    var characters = '';
    characters += (lowerSelection ? lower : '');
    characters += (upperSelection ? upper : '');
    characters += (specialSelection ? special : '');
    characters += (numberSelection ? numbers : '');

    pwd = password(confirmLength, characters);

    document.getElementById("password").innerHTML = pwd;

}

function password(l, characters) {
    var pwd = '';
    for (var i = 0; i < l; ++i) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}

//Copy to clipboard
function copied() {
    document.getElementById("password").select();
    document.execCommand("copy");
    alert("The password has been copied to your clipboard!");
}