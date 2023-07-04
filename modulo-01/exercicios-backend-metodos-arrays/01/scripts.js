const fruits = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

const reverseFruits = fruits.reverse().join(',')
console.log(reverseFruits)

fruits.pop()
fruits.shift()
fruits.push('Melão')
console.log(fruits)