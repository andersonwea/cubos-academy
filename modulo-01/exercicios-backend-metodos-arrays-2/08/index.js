const fruits = ['Manga', 'UVA', 'abacaxi', 'banaNA', 'MAçã']

function addIndexArray(fruits) {
  const formatedArray = fruits.map((fruit, i) => {
    const wordFormated = fruit
      .slice(0, 1)
      .toUpperCase()
      .concat(fruit.toLowerCase().slice(1))

    return `${i} - ${wordFormated}`
  })

  return formatedArray
}

console.log(addIndexArray(fruits))
