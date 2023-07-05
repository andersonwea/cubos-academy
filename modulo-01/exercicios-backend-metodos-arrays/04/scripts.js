const patients = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana']

function serviceQueue(patients, name, option) {
  if (name && option === 'agendar') {
    const updatedQueue = patients.filter((patient) => patient != name)
    updatedQueue.push(name)

    return updatedQueue.join(', ')
  }

  patients.shift()

  return patients.join(', ')
}

console.log(serviceQueue(patients, 'Ana', 'agendar'))
console.log(serviceQueue(patients, 'atender'))
