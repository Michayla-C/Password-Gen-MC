const characterAmountRange = document.getElementById("characterAmountRange")

const characterAmountNumber = document.getElementById("characterAmountNumber")

const upercaseElement = document.getElementById("upercase")
const numbersElement = document.getElementById("numbers")
const symbolsElement = document.getElementById("symbols")

const form = document.getElementById("passwordGenerator")

const passwordDisplay = document.getElementById("passwordDisplay")

const resultDOM = document.getElementById('result');
const copybtnDOM = document.getElementById('copy');
const lengthDOM = document.getElementById('length');
const uppercaseDOM = document.getElementById('uppercase');
const numbersDOM = document.getElementById('numbers');
const symbolsDOM = document.getElementById('symbols');
const generatebtn = document.getElementById('generate');

characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);

form.addEventListener("submit", e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const upercase = upercaseElement.checked
  const numbers = numbersElement.checked
  const symbols = symbolsElement.checked

  let generatePassword = (
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
    ) => {
    }

  const password = generatePassword(characterAmount, upercase, numbers, symbols)
  passwordDisplay.innerText = password
})

    const passwordCharacters = []
  for (let i = 0; i < characterAmountNumber; i++) {
    const characterCode = charCodes[Math.floor(Math.random()* charCodes.length)]  
    passwordCharacters.push(string.fromCharacteoCode(charCodes))
  }

let arrayFromLowToHigh = (low, high) => {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};

const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const characterAmount = lengthDOM.value;
  const includeUppercase = uppercaseDOM.checked;
  const includeNumbers = numbersDOM.checked;
  const includeSymbols = symbolsDOM.checked;
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  resultDOM.innerText = password;
});