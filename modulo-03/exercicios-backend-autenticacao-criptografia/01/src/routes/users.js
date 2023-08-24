import express from 'express'
import { createUser, loginUser } from '../controllers/user-controllers.js'

export const userRoutes = express()

userRoutes.post('/users', createUser)
userRoutes.post('/users/login', loginUser)
