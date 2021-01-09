'use strict'

document.getElementById('product').addEventListener('click', calculateEquation)

function calculateEquation () {
  const digit1 = document.getElementById('multiplicand').value
  // variable assigned to the first text box
  let digit2 = document.getElementById('multiplier').value
  // variable assigned to the second text box
  let result = 0
  while (digit2 !== 0) {
  // a loop to check when digit2 is not equal to 0
    if (digit2 > 0) {
      digit2--
    } else if (digit2 < 0) {
      digit2++
    }
    // conditions that check to see if digit2 is greater than 0 then decrease it by that increment other if it's less than 0 then increase it by that increment           
  result += parseInt(digit1)
    // adds digit1 to itself by the number of digit2 times
  }
  alert(result)
  // returns the final result value
}
