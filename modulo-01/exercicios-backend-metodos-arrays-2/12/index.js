const users = [
  {
    names: 'Antonio',
    age: 30,
    career: 'Jornalista',
  },
  {
    names: 'Maria',
    age: 30,
    career: 'Jornalista',
  },
  {
    names: 'Ana',
    age: 21,
    career: 'Programador',
  },
  {
    names: 'Beatriz',
    age: 20,
    career: 'Programador',
  },
  {
    names: 'José',
    age: 32,
    career: 'Jornalista',
  },
  {
    names: 'Marcos',
    age: 30,
    career: 'Programador',
  },
]

function validUsers(users) {
  const programmersOlderTwelve = users.filter(
    (user) => user.career === 'Programador' && user.age > 20,
  )

  const journalistsOlderThirty = users.filter(
    (user) => user.career === 'Jornalista' && user.age > 30,
  )

  const youngProgrammersAndJornalists = users.filter(
    (user) =>
      (user.career === 'Jornalista') | (user.career === 'Programador') &&
      user.age <= 29,
  )

  return {
    programmersOlderTwelve,
    journalistsOlderThirty,
    youngProgrammersAndJornalists,
  }
}

console.log(validUsers(users))
