const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const pares = []
const impares = []

function sliptOddOfEven(original) {
  for (number of original) {
    if (number % 2 == 0) {
      pares.push(number)
    } else {
      impares.push(number)
    }
  }

  return { pares, impares }
}

console.log(sliptOddOfEven(original))
