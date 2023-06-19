function calcDelta(a, b, c) {
  const delta = (b ** 2) - (4 * a * c)

  return delta
}

const a = 5
const b = 5
const c = 1

console.log(calcDelta(a, b, c))