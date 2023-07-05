const numeros = [3, 24, 1, 8, 11, 7, 15]

function findMaxNumber(numeros) {
  let maxNumber = numeros[0]

  for (number of numeros) {
    if (number > maxNumber) {
      maxNumber = number
    }
  }

  return maxNumber
}

console.log(findMaxNumber(numeros))
