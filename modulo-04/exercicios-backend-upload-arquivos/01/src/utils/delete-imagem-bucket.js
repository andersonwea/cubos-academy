const { DeleteObjectCommand } = require('@aws-sdk/client-s3')
const { s3Client } = require('../lib/s3Service')

async function deleteImagemBucket(imagemUrl) {
  if (!imagemUrl) {
    return null
  }

  const url = new URL(imagemUrl)

  const imagemNome = url.pathname.replace('/', '')

  const comando = new DeleteObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: imagemNome,
  })

  const response = await s3Client.send(comando)

  return response
}

module.exports = { deleteImagemBucket }
