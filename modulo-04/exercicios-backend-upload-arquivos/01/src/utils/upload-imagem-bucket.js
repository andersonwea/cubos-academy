const { PutObjectCommand } = require('@aws-sdk/client-s3')
const { randomUUID } = require('node:crypto')
const { extname } = require('node:path')
const { s3Client } = require('../lib/s3Service')

async function uploadImagemBucket(imagem, produtoId) {
  if (!imagem) {
    return null
  }

  const mimeTypeRegex = /^(image)\/[a-zA-Z]+/

  const formatoValido = mimeTypeRegex.test(imagem.mimetype)

  if (!formatoValido) {
    throw new Error('Formato inválido.')
  }

  const idArquivo = randomUUID()
  const extensao = extname(imagem.originalname)

  const nomeImagem = idArquivo.concat(extensao)

  const comando = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `produto/${produtoId}/${nomeImagem}`,
    Body: imagem.buffer,
  })

  const response = await s3Client.send(comando)

  if (response.$metadata.httpStatusCode !== 200) {
    throw new Error('Erro ao enviar imagem.')
  }

  const imagemUrl = new URL(process.env.AWS_BASE_URL)

  imagemUrl.pathname = `produto/${produtoId}/${nomeImagem}`

  return imagemUrl.toString()
}

module.exports = { uploadImagemBucket }
