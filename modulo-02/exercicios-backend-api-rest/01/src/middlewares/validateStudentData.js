function validateStudentData(request, response, next) {
  const { name, lastname, age, course } = request.body

  if (!name || !lastname || !age || !course) {
    return response.status(400).json({ message: 'Dados incompletos.' })
  }

  return next()
}

export { validateStudentData }
