const { PutObjectCommand } = require('@aws-sdk/client-s3')
const { randomUUID } = require('node:crypto')
const { extname } = require('node:path')
const { s3Client } = require('../lib/s3Service')

async function uploadImagemBucket(arquivo) {
  if (!arquivo) {
    return null
  }

  const mimeTypeRegex = /^(image)\/[a-zA-Z]+/

  const formatoValido = mimeTypeRegex.test(arquivo.mimetype)

  if (!formatoValido) {
    throw new Error('Formato inválido.')
  }

  const idArquivo = randomUUID()
  const extensao = extname(arquivo.originalname)

  const nomeArquivo = idArquivo.concat(extensao)

  const comando = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: nomeArquivo,
    Body: arquivo.buffer,
  })

  const response = await s3Client.send(comando)

  if (response.$metadata.httpStatusCode !== 200) {
    throw new Error('Erro ao enviar imagem.')
  }

  const imagemUrl = new URL(process.env.AWS_BASE_URL)

  imagemUrl.pathname = nomeArquivo

  return imagemUrl.toString()
}

module.exports = { uploadImagemBucket }
