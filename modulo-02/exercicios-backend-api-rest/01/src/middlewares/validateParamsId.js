function validateParamsId(request, response, next) {
  const { id } = request.params

  if (isNaN(Number(id)) || !id) {
    return response
      .status(400)
      .json({ message: 'O ID deve ser um número válido' })
  }

  return next()
}

export { validateParamsId }
