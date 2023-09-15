import express, { NextFunction, Request, Response, json } from 'express'
import { userRoutes } from './http/controllers/users/routes'
import { ZodError } from 'zod'
import 'express-async-errors'
import { env } from './env'
import { error } from 'console'

export const app = express()

app.use(express.json())

app.use(userRoutes)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  console.error('deu ruim')
  if (error instanceof ZodError) {
    return response.status(400).json({ message: `Validation error.`, issues: error.format()})
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: Here we should log to a external tool like DataDog/NewRelic/Sentry
  }

  return response.status(500).json({ message: 'Internal Server Error.'})
})