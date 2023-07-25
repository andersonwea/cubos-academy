function validatePassword(request, response, next) {
  const { password } = request.query

  if (!password) {
    return response.status(401).json({ message: 'Unauthorized' })
  }

  if (password !== 'cubos123') {
    return response.status(401).json({ message: 'Unauthorized' })
  }

  return next()
}

export { validatePassword }
