const numeros = [3, 4, 7, 8, 1, 6, 5, 10]

function sumOddNumber(numeros) {
  let sum = 0

  for (number of numeros) {
    if (number % 2 === 0) {
      sum += number
    }
  }

  return sum
}

console.log(sumOddNumber(numeros))
