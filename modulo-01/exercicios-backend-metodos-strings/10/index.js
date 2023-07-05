const nomeArquivo = 'Foto da Familia.png'

function isImage(nomeArquivo) {
  const allowedImages = ['gif', 'jpg', 'png', 'jpeg']

  const result = !!allowedImages.find((ext) => nomeArquivo.includes(ext))

  if (!result) {
    return 'Arquivo inválido'
  }

  return 'Arquivo válido'
}

console.log(isImage(nomeArquivo))
