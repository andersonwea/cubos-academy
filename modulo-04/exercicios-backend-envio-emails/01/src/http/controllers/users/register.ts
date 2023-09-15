import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'
import { makeRegiterUseCase } from '../../../use-cases/factories/make-register-use-case'
import { UserAlreadyExistsError } from '../../../use-cases/errors/user-already-exists-error'

export async function register(request: Request, response: Response, next: NextFunction) {
  const registerUserSchema = z.object({
    name: z.string(),
    email: z.string().email()
  })

  try {
    const { name, email } = registerUserSchema.parse(request.body)

    const registerUseCase = makeRegiterUseCase()
  
    const { user } = await registerUseCase.execute({
      name,
      email
    })

    return response.status(201).json({ user })
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return response.status(400).json({ message: 'User already exists with this email.'})
    }

    next(err)
  }
}