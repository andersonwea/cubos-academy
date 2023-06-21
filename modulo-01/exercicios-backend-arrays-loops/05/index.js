const original = [1, 4, 12, 21, 53, 88, 112];

function filterOddNumbers(original) {
  let oddNumbers = []
  
  for(number of original) {
    if(number % 2 === 0) {
      oddNumbers.push(number)
    }
  }

  return oddNumbers
}

console.log(filterOddNumbers(original))