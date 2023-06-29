const comment = "Esse COVID é muito perigoso!";

function filterComments(comment) {
  const regex = new RegExp(/pandemia|covid/i)
  const isBlocked = regex.test(comment)

  if(isBlocked) {
    return 'Comentário bloqueado por conter palavras proibidas'
  }

  return 'Comentário autorizado'
}

console.log(filterComments(comment))