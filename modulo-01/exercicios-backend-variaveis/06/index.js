function calcAverageSpeed(distanceTraveled, time) {
  const averageSpeedInSecond = distanceTraveled / time
  const averageSpeedInHour = averageSpeedInSecond * 3.6

  return averageSpeedInHour
}

const distanceTraveled = 500
const time = 10

console.log(calcAverageSpeed(distanceTraveled, time))