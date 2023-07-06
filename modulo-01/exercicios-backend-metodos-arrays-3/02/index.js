const cities = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro']

function greatestLength(cities) {
  const greatest = cities.reduce((greatest, word) => {
    if (word.length > greatest.length) {
      greatest = word
    }

    return word
  }, cities[0])

  return greatest
}

console.log(greatestLength(cities))
