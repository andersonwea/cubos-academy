import express from 'express'
import { createUser } from '../controllers/user-controllers.js'

export const userRoutes = express()

userRoutes.post('/users', createUser)
