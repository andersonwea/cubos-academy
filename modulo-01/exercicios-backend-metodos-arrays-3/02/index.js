const cities = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro']

function greatestLength(cities) {
  const greatest = cities.reduce((greatest, word) => {
    greatest = cities[0]

    if (word.length > greatest.length) {
      greatest = word
    }

    return word
  })

  return greatest
}

console.log(greatestLength(cities))
