const numbers = [0, 122, 4, 6, 7, 8, 44]

function checkEvenNumber(numbers) {
  const isAllEvenNumbers = numbers.every((number) => number % 2 === 0)

  if (!isAllEvenNumbers) {
    return 'Array inválido'
  }

  return 'Array válido'
}

console.log(checkEvenNumber(numbers))
