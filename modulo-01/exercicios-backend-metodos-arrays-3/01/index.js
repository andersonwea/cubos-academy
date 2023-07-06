const numbers = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
const fruits = ['Banana', 'Amora', 'abacaxi', 'uva', 'Pera']

function numbersAscending() {
  return numbers.sort((a, b) => a - b)
}

function numbersDescending(numbers) {
  return numbers.sort((a, b) => b - a)
}

function numbersAscendingASCII(numbers) {
  return numbers.sort()
}

function alphabeticalOrder(fruits) {
  return fruits.map((fruit) => fruit.toLowerCase()).sort()
}

function alphabeticalOrderDescending(fruits) {
  return fruits
    .map((fruit) => fruit.toLowerCase())
    .sort()
    .reverse()
}

function lessCharacterToMoreCharacter(fruits) {
  return fruits.sort((a, b) => a.length - b.length)
}

console.log(numbersAscending(numbers))
console.log(numbersDescending(numbers))
console.log(numbersAscendingASCII(numbers))
console.log(alphabeticalOrder(fruits))
console.log(alphabeticalOrderDescending(fruits))
console.log(lessCharacterToMoreCharacter(fruits))
