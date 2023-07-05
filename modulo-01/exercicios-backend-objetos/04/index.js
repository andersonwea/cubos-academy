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

users.forEach((user) => {
  const adult = user.age >= 18

  user.adult = adult
})

console.log(users)
