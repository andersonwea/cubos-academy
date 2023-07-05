const cellPhone = 7199918888

function formatcellPhoneNumber(cellPhone) {
  let cellPhoneToFormat = String(cellPhone)

  const validCellPhone = cellPhoneToFormat.length >= 8

  if (!validCellPhone) {
    return 'Celular Inválido'
  }

  if (cellPhoneToFormat.length > 9) {
    const regex = /(\w{2})(\w{1})(\w{4})(\w{4})/g
    let [ddd, cellPhoneNumber] = cellPhoneToFormat
      .split(/(\w{2})(\w+)/)
      .filter(Boolean)

    cellPhoneNumber = cellPhoneNumber.padStart(9, '9')
    const cellPhoneNumberWithDdd = ddd + cellPhoneNumber

    const cellPhoneNumberFormated = cellPhoneNumberWithDdd.replace(
      regex,
      '($1) $2 $3-$4',
    )

    return cellPhoneNumberFormated
  }

  const regex = /(\w{1})(\w{4})(\w{4})/g
  cellPhoneToFormat = cellPhoneToFormat.padStart(9, '9')

  const cellPhoneNumberFormated = cellPhoneToFormat.replace(regex, '$1 $2-$3')

  return cellPhoneNumberFormated
}

console.log(formatcellPhoneNumber(11977896352))
console.log(formatcellPhoneNumber(1177896352))
console.log(formatcellPhoneNumber(977896352))
console.log(formatcellPhoneNumber(77896352))
console.log(formatcellPhoneNumber(7896352))
