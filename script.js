const amountRange = document.getElementById('amountRange')
const amountNumber = document.getElementById('amountNumber')
const uppercaseElement = document.getElementById('uppercase')
const numbersElement = document.getElementById('numbers')
const symbolsElement = document.getElementById('symbols')

const form = document.getElementById('generatorForm')

const lowercaseCharCodes = arryFromLowToHigh(65, 90)
const uppercaseCharCodes = arryFromLowToHigh(97, 122)
const numberCharCodes = arrayFromLowToHigh(48, 57)
const symbolsCharCodes = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

amountNumber.addEventListener('imput, syncAmount')
amountRange.addEventListener('imput, syncAmount')

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = amountNumber.value
    const uppercase = uppercaseElement.checked
    const numbers = numbersElement.checked
    const symbols = symbolsElement.checked
    const password = generatePassword(characterAmount, uppercase, numbers, symbols)
})

function generatePassword(characterAmount, uppercase, numbers, symbols) {
    String.fromCharCode(65)
}

function arryFromLowToHigh(low, high) {
    const arry = []
    for (let i = low; i <= high; i++) {
        arry.push(i)
    }  
    return arry
}

function syncAmount(e) {
    const value = e.target.value
    amountNumber.value = value
    amountRange.value = value
}


var dataElement = getElementById ('owasp');
var owasp = JSON.parse(dataElement.textContent);

generateBtn.addEventListener("click", writePassword);