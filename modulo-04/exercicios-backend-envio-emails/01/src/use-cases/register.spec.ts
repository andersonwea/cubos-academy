import { beforeEach, describe, expect, it } from 'vitest'
import { UsersRepository } from '../repositories/users-repository'
import { RegisterUseCase } from './register'
import { InMemoryUsersRepository } from '../repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

describe('Regiter Use Case', () => {
  let usersRepository: UsersRepository
  let sut: RegisterUseCase
  
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new RegisterUseCase(usersRepository)
  })
  
  it('should be able to register', async () => {
    const { user } = await sut.execute({
      name: 'Anderson',
      email: 'anderson@example.com'
    })

    expect(user).toEqual(
      expect.objectContaining({
        name: 'Anderson',
        email: 'anderson@example.com'
      })
    )
  })

  it('should not able to register twite with same email', async () => {
    await sut.execute({
      name: 'Anderson',
      email: 'anderson@example.com'
    })

    await expect(() => 
      sut.execute({
        name: 'Anderson',
        email: 'anderson@example.com'
      })
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})