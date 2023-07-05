const numbers = [10, 987, -886, 0, 12, 199, -45, -67]

function getPositiveNumbers(numbers) {
  const positiveNumbers = numbers.filter((number) => number > 0)

  return positiveNumbers
}

console.log(getPositiveNumbers(numbers))
