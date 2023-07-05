const numeros = [8, 11, 4, 1]

function maxDifference(numeros) {
  let max = numeros[0]
  let min = numeros[0]

  for (number of numeros) {
    if (number < min) {
      min = number
    } else if (number > max) {
      max = number
    }
  }

  return max - min
}

console.log(maxDifference(numeros))
