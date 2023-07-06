const numbers = [1, 98, -76, 0, 12, 19, 5, 60, 44]

function biggestNumber(numbers) {
  const biggestNumber = numbers.reduce((biggestNumber, number) => {
    if (number > biggestNumber) {
      biggestNumber = number
    }

    return biggestNumber
  }, numbers[0])

  return biggestNumber
}

console.log(biggestNumber(numbers))
