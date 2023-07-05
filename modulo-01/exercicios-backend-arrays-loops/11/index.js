const original = [5, 7, 13, 17, 26, 34, 118, 245]

function filterNumbers(orginal) {
  const filteredNumbers = []

  for (number of original) {
    if ((number >= 10 && number <= 20) || number > 100) {
      filteredNumbers.push(number)
    }
  }

  return filteredNumbers
}

console.log(filterNumbers(original))
