const characterAmountRange = document.getElementById("characterAmountRange")

const characterAmountNumber = document.getElementById("characterAmountNumber")

const upercaseElement = document.getElementById("upercase")
const numbersElement = document.getElementById("numbers")
const symbolsElement = document.getElementById("symbols")

const form = document.getElementById("passwordGenerator")

const passwordDisplay = document.getElementById("passwordDisplay")

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const UPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)


characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);

form.addEventListener("submit", e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const upercase = upercaseElement.checked
  const numbers = numbersElement.checked
  const symbols = symbolsElement.checked

  const password = generatePassword(characterAmount, upercase, numbers, symbols)
  passwordDisplay.innerText = password
})

function generatePassword(characterAmount, upercase, numbers, symbols) {
  let charCodes = UPERCASE_CHAR_CODE
  if (upercase) charCodes = charCodes.concat(UPERCASE_CHAR_CODES)
  if (numbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES)
  if (symbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)

    const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random()* charCodes.length)]  
    passwordCharacters.push(string.fromCharacteoCode(charCodes))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low,high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}