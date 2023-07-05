const cities = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro']

function cityCaractersLimited(cities) {
  const alowedCitiesNames = cities.filter((city) => city.length <= 8)

  return alowedCitiesNames.join(', ')
}

console.log(cityCaractersLimited(cities))
