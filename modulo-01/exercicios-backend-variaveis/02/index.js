function convertFahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9)

  return celsius.toFixed(1)
}

const fahrenheit = 73

console.log(convertFahrenheitToCelsius(fahrenheit))
