export function validateIdParams(request, response, next) {
  const { id } = request.params

  if (isNaN(id)) {
    return response.status(400).json({
      message: 'O valor do parâmetro ID da URL não é um número válido.',
    })
  }

  return next()
}
