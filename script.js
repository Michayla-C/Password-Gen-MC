const amountRange = document.getElementById('amountRange')
const amountNumber = document.getElementById('amountNumber')
const uppercaseElement = document.getElementById('uppercase')
const numbersElement = document.getElementById('numbers')
const symbolsElement = document.getElementById('symbols')

const form = document.getElementById('generatorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

// CharCode
var res = String.fromCharCode((65, 90), (97, 122), (48, 57), (33, 47), (91, 96), (58, 64), (123, 126));

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
console.log(alphabet);

var arrayFromLowToHigh =[lowercaseCharCodes, uppercaseCharCodes, numberCharCodes, symbolsCharCodes]
const lowercaseCharCodes = arryFromLowToHigh(65, 90)
const uppercaseCharCodes = arryFromLowToHigh(97, 122)
const numberCharCodes = arrayFromLowToHigh(48, 57)
const symbolsCharCodes = arrayFromLowToHigh((33, 47), (58, 64), (91, 96), (123, 126))

// If All Else Fails
var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$^&%*()+=-[]{}|:<>?,.';
var numbers = '1234567890';

var lowerSelection = false;
var upperSelection = false;
var specialSelection = false;
var numberSelection = false;

amountNumber.addEventListener('imput, syncAmount')
amountRange.addEventListener('imput, syncAmount')

//Form Type
form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = amountNumber.value
    const uppercase = uppercaseElement.checked
    const numbers = numbersElement.checked
    const symbols = symbolsElement.checked
    const password = generatePassword(characterAmount, uppercase, numbers, symbols)
    passwordDisplay.innerText = password
})

//Alert Pop-Ups
  function generate() {
    var confirmLength = '';
    //Character Length
    while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
        confirmLength = prompt("Chose between 8 to 128 characters");
        if (confirmLength === null) {
            break;
        }
    }

    //Character Types
    if (confirmLength) {
        if (confirm("Would you like to use lowercase characters?") == true) {
            lowerSelection = true
        } 

        if (confirm("Would you like to use uppercase characters?") == true) {
            upperSelection = true
        }

        if (confirm("Would you like to use special characters?") == true) {
            specialSelection = true
        }

        if (confirm("Would you like to use numerical characters?") == true) {
            numberSelection = true
        }

    //Idiot Alert
        if (lowerSelection === false && upperSelection === false && specialSelection === false && numberSelection === false) {
            alert("At least one character type must be selected")
        }
    }
    
    var characters = '';
    characters += (lowerSelection ? lower : '');
    characters += (upperSelection ? upper : '');
    characters += (specialSelection ? special : '');
    characters += (numberSelection ? numbers : '');