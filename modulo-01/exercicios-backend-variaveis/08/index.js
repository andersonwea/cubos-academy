function calcPerimeterAndCircleArea(circleRadius) {
  const pi = Math.PI

  const circleLength = 2 * pi * circleRadius
  const circleArea = pi * circleRadius ** 2

  return { circleLength, circleArea }
}

const circleRadius = 1

console.log(calcPerimeterAndCircleArea(circleRadius))
