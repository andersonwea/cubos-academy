import express from 'express'
import { register } from './register'

export const userRoutes = express()

userRoutes.post('/users', register)