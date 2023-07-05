const numbers = [1, 98, -76, 0, 12, 19, 5, 60, 44]

function getEvenNumbers(numbers) {
  const evenNumbers = numbers.filter((number) => number % 2 === 0)

  return evenNumbers
}

console.log(getEvenNumbers(numbers))
