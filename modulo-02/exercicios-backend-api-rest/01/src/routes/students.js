import express from 'express'
import {
  createStudent,
  deleteStudent,
  listStudentById,
  listStudents,
  updateNameStudent,
  updateStudent,
} from '../controllers/students.js'
import { validatePassword } from '../middlewares/validatePassword.js'
import { validateParamsId } from '../middlewares/validateParamsId.js'
import { validateStudentData } from '../middlewares/validateStudentData.js'

const studentRouter = express.Router()

studentRouter.get('/students', validatePassword, listStudents)

studentRouter.get(
  '/students/:id',
  validateParamsId,
  validatePassword,
  listStudentById,
)

studentRouter.post(
  '/students',
  validateStudentData,
  validatePassword,
  createStudent,
)

studentRouter.delete('/students/:id?', validateParamsId, deleteStudent)

studentRouter.put(
  '/students/:id?',
  validateParamsId,
  validateStudentData,
  updateStudent,
)

studentRouter.patch('/students/:id?/name', validateParamsId, updateNameStudent)

export { studentRouter }
