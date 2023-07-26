export function validateIdParams(request, response, next) {
  const { id } = request.params

  if (isNaN(id)) {
    return response.status(400).json({ message: 'Número de ID inválido.' })
  }

  return next()
}
