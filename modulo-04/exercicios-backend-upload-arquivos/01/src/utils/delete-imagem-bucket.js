const { DeleteObjectCommand } = require('@aws-sdk/client-s3')
const { s3Client } = require('../lib/s3Service')

async function deleteImagemBucket(produto) {
  if (!produto) {
    return null
  }

  const url = new URL(produto.imagem)

  const nomeImagem = url.pathname.replace('/', '')

  const comando = new DeleteObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: nomeImagem,
  })

  const response = await s3Client.send(comando)

  return response
}

module.exports = { deleteImagemBucket }
