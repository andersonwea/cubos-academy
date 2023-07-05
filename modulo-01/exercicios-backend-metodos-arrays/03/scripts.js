const cars = [
  'Ford Ká',
  'Ranger',
  'Hilux',
  'Corola',
  'Fusca',
  'Chevete',
  'Brasilia',
]
const position = 3

function carsGroup(cars, position) {
  const carGroup = cars.slice(position, position + 3)

  return carGroup.join(' - ')
}

console.log(carsGroup(cars, position))
