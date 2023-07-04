const patients = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function schedulePatient(patients, name) {
  const updatedQueue = patients.filter(patient => patient != name)
  updatedQueue.push(name)

  return updatedQueue.join(', ')
}

function attendPacient(patients) {
  patients.shift()

  return patients.join(', ')
}

function cancelAppointment(patients, name) {
  const updatedQueue = patients.filter(patient => patient != name)

  return updatedQueue.join(', ')
}

console.log(schedulePatient(patients, 'Ana'))
console.log(attendPacient(patients))
console.log(cancelAppointment(patients, 'Bárbara'))

