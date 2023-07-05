const cpf = '011.022.033-44'

function removeSpecialCaracters(cpf) {
  const regex = new RegExp(/\W|\D/g)

  const formatedCpf = cpf.replace(regex, '')

  return formatedCpf
}

console.log(removeSpecialCaracters(cpf))
