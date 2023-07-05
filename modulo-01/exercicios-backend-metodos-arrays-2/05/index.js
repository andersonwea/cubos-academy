const users = [
  {
    name: 'André',
    age: 29,
    licensed: false,
  },
  {
    name: 'Marcos',
    age: 70,
    licensed: true,
  },
  {
    name: 'Ana',
    age: 35,
    licensed: true,
  },
  {
    name: 'Vinícius',
    age: 44,
    licensed: true,
  },
  {
    name: 'Carlos',
    age: 17,
    licensed: false,
  },
  {
    name: 'Maria',
    age: 19,
    licensed: true,
  },
]

function userValidation(users) {
  const adultUsers = users.filter((user) => user.age >= 18 && user.age <= 65)

  const isLicensed = adultUsers.every((user) => user.licensed)

  if (!isLicensed) {
    return 'Todos precisam estar habilitados'
  }

  return 'Todos passaram no teste'
}

console.log(userValidation(users))
