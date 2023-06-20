const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

function checkEntryPermition(idade, possuiPatologia, altura, ehEstudante) {
  if(idade < 12 || idade > 65 || possuiPatologia || altura < 150) {
    return 'ACESSO NEGADO'
  }

  const entryValue = ehEstudante || idade < 18 ? '10 reais' : '20 reais'

  return entryValue
}

console.log(checkEntryPermition(idade, possuiPatologia, altura, ehEstudante))