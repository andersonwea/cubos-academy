import { studentsDb } from '../database/students.js'
import { courses } from '../database/courses.js'

let students = studentsDb

function listStudents(request, response) {
  return response.json(students)
}

function listStudentById(request, response) {
  const { id } = request.params

  const student = students.find((student) => student.id === Number(id))

  if (!student) {
    return response.status(404).json({ message: 'Student not found' })
  }

  return response.json(student)
}

function createStudent(request, response) {
  const { name, lastname, age, course } = request.body

  const lastIndex = students.length - 1

  let identification = students[lastIndex].id

  if (!name.trim() || !lastname.trim() || !course.trim()) {
    return response.status(400).json({ message: 'Dados incompletos.' })
  }

  if (age < 18) {
    return response
      .status(400)
      .json({ message: 'Estudante deve ser maior de idade' })
  }

  const isValidCourse = !!courses.find(
    (courseDetail) => courseDetail.name.toLowerCase() === course.toLowerCase(),
  )
  console.log(isValidCourse)

  if (!isValidCourse) {
    return response.status(400).json({ message: 'Curso não encontrado.' })
  }

  const newStudent = {
    id: identification++,
    name,
    lastname,
    age,
    course,
  }

  students.push(newStudent)

  return response.status(201).send()
}

function deleteStudent(request, response) {
  const { id } = request.params

  const student = students.find((student) => student.id === Number(id))

  if (!student) {
    return response.status(404).json({ message: 'Student not found' })
  }

  students = students.filter((student) => student.id !== Number(id))

  return response.status(200).json(student)
}

function updateStudent(request, response) {
  const { id } = request.params
  const { name, lastname, age, course } = request.body

  const student = students.find((student) => student.id === Number(id))

  if (!student) {
    return response.status(404).json({ message: 'Aluno não encontrado.' })
  }

  student.name = name
  student.lastname = lastname
  student.age = age
  student.course = course

  return response.status(204).send()
}

function updateNameStudent(request, response) {
  const { id } = request.params
  const { name } = request.body

  const student = students.find((student) => student.id === Number(id))

  if (!student) {
    return response.status(404).json({ message: 'Aluno não encontrado.' })
  }

  student.name = name

  return response.status(204).send()
}

export {
  listStudents,
  listStudentById,
  createStudent,
  deleteStudent,
  updateStudent,
  updateNameStudent,
}
