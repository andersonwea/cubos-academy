const users = [
  {
      name: "João",
      pets: ["Max"],
  },
  {
      name: "Ana",
      pets: ["Pingo", "Lulu"],
  },
  {
      name: "Beatriz",
      pets: ["Lessie"],
  },
  {
      name: "Carlos",
      pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
      name: "Antonio",
      pets: ["Naninha"],
  },
]

function findPetOwner(users, petName) {
  let petOwner = ''

  users.forEach(user => {
    const found = !!user.pets.find(pet => pet === petName)

    if(found) {
      petOwner = user.name
    }
  })

  if(!petOwner) {
    return `Que pena ${petName} não encontramos seu dono(a)`
  }

  return `O dono(a) do(a) ${petName} é o(a) ${petOwner}`
}

console.log(findPetOwner(users, 'Farofa'))