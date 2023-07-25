import guestsData from '../database/guests.js'

let { guests } = guestsData

export function listGuests(request, response) {
  const { name } = request.query
  console.log(request.query)

  if (!name) {
    return response.json(guests)
  }

  const guest = guests.find(
    (guest) => guest.toLowerCase() === name.toLowerCase(),
  )

  if (!guest) {
    return response.json({
      message: 'O convidado buscado não está presente na lista.',
    })
  }

  return response.json({ message: 'Convidado presente.' })
}

export function createGuest(request, response) {
  const { name } = request.body

  if (!name) {
    return response.status(400).json({ message: 'Nome obrigatório' })
  }

  const isGuestExixts = !!guests.find(
    (guest) => guest.toLowerCase() === name.toLowerCase(),
  )

  if (isGuestExixts) {
    return response.status(400).json({ message: 'Convidado já existe.' })
  }

  const nameFormated = name.slice(0, 1).toUpperCase().concat(name.slice(1))

  guests.push(nameFormated)

  return response.status(201).json({ message: 'Convidado adicionado.' })
}

export function deleteGuest(request, response) {
  const { name } = request.params

  if (!name) {
    return response
      .status(400)
      .json({ message: 'Informe o nome do convidado.' })
  }

  const guest = guests.find(
    (guest) => guest.toLowerCase() === name.toLowerCase(),
  )

  if (!guest) {
    return response.status(404).json({
      message:
        'O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.',
    })
  }

  guests = guests.filter((guest) => guest.toLowerCase() !== name.toLowerCase())

  return response.json({ message: 'Convidado removido.' })
}
