const disjuntores = [false, false, true, false, false, true, false, false]

function checkCircuitBreakers(disjuntores) {
  let index = 0

  for (circuitBreaker of disjuntores) {
    if (circuitBreaker) {
      console.log(index)
    }

    index += 1
  }
}

checkCircuitBreakers(disjuntores)
