const emails = [
  'jose@cubos.academy',
  'jose@cubos.academy.br',
  'jose.messias@cubos.academy',
  'jose.messias@cubos.io',
  'jose@cubos',
  'jose.messias@cubos',
  'jose.messias@.',
  'jose.@cubos',
  '.@',
  '@.',
  'jose.messias@cubos.',
  '.messias@cubos.',
  '.messias@cubo',
]

function validateEmail(email) {
  const regex = new RegExp(/^[^.].*@.*[^.]$/)

  let isValidEmail = regex.test(email) 

  if(!isValidEmail) {
    return 'E-mail inválido'
  }
    
  return 'E-mail válido'
  
}

emails.forEach(email => console.log(validateEmail(email)))