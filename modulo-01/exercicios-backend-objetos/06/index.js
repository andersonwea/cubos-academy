const users = [
  {
    name: 'João',
    age: 25,
  },
  {
    name: 'Ana',
    age: 18,
  },
  {
    name: 'Beatriz',
    age: 15,
  },
  {
    name: 'Carlos',
    age: 16,
  },
  {
    name: 'Antonio',
    age: 32,
  },
]

const adults = users.filter((user) => user.age >= 18)
const youngs = users.filter((user) => user.age < 18)

console.log({
  adults,
  youngs,
})
