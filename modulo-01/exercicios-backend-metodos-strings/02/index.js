const cpf = "12345678900";
const cnpj = "12345678000199";

function formatCpf(cpf) {
  if(cpf.length != 11) {
    return 'CPF Inválido'
  }

  const regex = new RegExp(/(\w{3})(\w{3})(\w{3})(\w{2})/)

  const fomatedCpf = cpf.replace(regex, '$1.$2.$3-$4')

  return fomatedCpf
}

function formatCnpj(cnpj) {
  if(cnpj.length != 14) {
    return 'CNPJ Inválido'
  }

  const regex = new RegExp(/(\w{2})(\w{3})(\w{3})(\w{4})(\w{2})/)

  const fomatedCnpj = cnpj.replace(regex, '$1.$2.$3/$4-$5')

  return fomatedCnpj
}

console.log(formatCpf(cpf))
console.log(formatCnpj(cnpj))