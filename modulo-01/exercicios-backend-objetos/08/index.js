const users = [
  {
      name: "João",
      pets: [],
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

users.forEach(user => {
  if(!user.pets) {
    console.log(`Sou ${user.name} e não tenho 0 pets`)
  }

  user.pets === 1
    ? console.log(`Sou ${user.name} e tenho ${user.pets.length} pet`)
    : console.log(`Sou ${user.name} e tenho ${user.pets.length} pets`) 
})