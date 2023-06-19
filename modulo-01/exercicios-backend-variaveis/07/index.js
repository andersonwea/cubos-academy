function calcCasesCOVID(populationInfected, transmitionPerPerson, time) {
  const populationInfectedAfterTime = populationInfected * (transmitionPerPerson ** (time / 7))

  return Math.round(populationInfectedAfterTime)
}

const populationInfected = 1000
const transmitionPerPerson = 4
const time = 100

console.log(calcCasesCOVID(populationInfected, transmitionPerPerson, time))