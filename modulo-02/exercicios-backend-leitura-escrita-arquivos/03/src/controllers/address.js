import fs from 'fs/promises'
import { buscarEndereco } from 'utils-playground'

export async function getAddressByZipCode(request, response) {
  const { zipcode } = request.params

  if (!zipcode) {
    return response.status(400).json({ message: 'CEP obrigatório.' })
  }

  try {
    const addressesData = await fs.readFile('src/database/addresses.json')
    const addresses = JSON.parse(addressesData)

    const address = await buscarEndereco(zipcode)

    const isAddressExists = !!addresses.find(
      (addressData) => addressData.logradouro === address.logradouro,
    )

    if (isAddressExists) {
      return response.status(400).json({ message: 'Endereço já existe.' })
    }

    addresses.push(address)

    const addresStringify = JSON.stringify(addresses)
    await fs.writeFile('src/database/addresses.json', addresStringify)

    return response.json(address)
  } catch (err) {
    console.log(err)
    return response.status(500).json({ message: 'Ouve um erro no servidor.' })
  }
}
