const car = {
  on: false,
  speed: 0,

  turnOn() {
    if(this.on) {
      return `Esse carro já está ligado.`
    }

    this.on = true;
    return `Carro ligado. Velocidade ${this.speed}.`
  },

  turnOff() {
    if(!this.on) {
      return `Esse carro já está desligado.`
    }

    this.on = false
    this.speed = 0
    return `Carro desligado. Velocidade ${this.speed}.`
  },

  speedUp() {
    if(!this.on) {
      return `Não é possível acelerar um carro desligado.`
    }

    this.speed += 10
    return `Carro ligado. Velocidade ${this.speed}`
  },

  speedDown() {
    if(!this.on) {
      return `Não é possível desacelerar um carro desligado.`
    }

    this.speed -= 10
    return `Carro ligado. Velocidade ${this.speed}.`
  },
}

console.log(car.turnOff())
console.log(car.turnOn())
console.log(car.turnOn())
console.log(car.speedUp())
console.log(car.speedUp())
console.log(car.speedDown())
console.log(car.turnOff())
console.log(car.speedUp())
console.log(car.speedDown())