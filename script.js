const characterAmountRange = document.getElementById("characterAmountRange")

const characterAmountNumber = document.getElementById("characterAmountNumber")

const upercaseElement = document.getElementById("upercase")
const numbersElement = document.getElementById("numbers")
const symbolsElement = document.getElementById("symbols")

const form = document.getElementById("passwordGenerator")

characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);

form.addEventListener("submit", e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const upercase = upercaseElement.checked
  const numbers = numbersElement.checked
  const symbols = symbolsElement.checked

  const password = generatePassword(characterAmount, upercase, numbers, symbols)
})

function generatePassword(characterAmount, upercase, numbers, symbols) {
  String.fromCharCode(65)
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