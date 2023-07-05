const addresses = [
  { zipCode: '00111222', street: 'Rua dos Artistas' },
  { zipCode: '00111333', street: 'Rua Augusta' },
  { zipCode: '00222444', street: 'Avenida Paralela' },
  { zipCode: '11222333', street: 'Rua Carlos Gomes' },
]

function getAddressByZipCode(zipCode) {
  const { street } = addresses.find((address) => address.zipCode === zipCode)

  if (!street) {
    return 'Endereço não encontrado'
  }

  return street
}

console.log(getAddressByZipCode('00222444'))
