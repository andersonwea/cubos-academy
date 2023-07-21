import { properties } from '../database/db.js'

export function listProperties(req, res) {
  return res.send(properties)
}

export function listPropertieById(req, res) {
  const { id } = req.params
  console.log(id)

  const propertie = properties.find((propertie) => propertie.id === Number(id))

  if (!propertie) {
    return res.status(404).send('Não encontrado')
  }

  return res.send(propertie)
}
