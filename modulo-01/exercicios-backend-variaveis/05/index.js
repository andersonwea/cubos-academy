function calcDistanceBetweenPoints(firstPoint, secondPoint) {
  const { x1, y1 } = firstPoint
  const { x2, y2 } = secondPoint

  const firstPointCalc = (x2 - x1) ** 2
  const secondPointCalc = (y2 - y1) ** 2

  const distance = Math.sqrt(firstPointCalc + secondPointCalc)

  return distance
}

const firstPoint = { x1: 1, y1: 1 }
const secondPoint = { x2: 1, y2: 4 }

console.log(calcDistanceBetweenPoints(firstPoint, secondPoint))
