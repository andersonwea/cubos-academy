export function validateBookData(request, response, next) {
  const { titulo, autor, ano, numPaginas } = request.body

  if (!titulo || !autor || !ano || !numPaginas) {
    return response.status(400).json({ message: 'Dados incompletos.' })
  }

  return next()
}
