function calcInteriorAnglesPolygon() {
  const numberSidesPolygon = 6

  const sumInteriorAngles = (numberSidesPolygon - 2) * 180
  const angleInDegrees = sumInteriorAngles / numberSidesPolygon

  return {sumInteriorAngles, angleInDegrees}
}

const {sumInteriorAngles, angleInDegrees} = calcInteriorAnglesPolygon()

console.log(`O valor da soma dos ângulos iternos é ${sumInteriorAngles}
 e o valor de cada ângulo do polígono é ${angleInDegrees}`)