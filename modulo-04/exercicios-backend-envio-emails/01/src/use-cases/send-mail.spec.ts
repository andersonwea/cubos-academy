import { beforeEach, describe, expect, it } from 'vitest'
import { UsersRepository } from '../repositories/users-repository'
import { InMemoryUsersRepository } from '../repositories/in-memory/in-memory-users-repository'
import { SendMailUseCase } from './send-mail'
import { EmailGateway } from '../adapters/email-gateway'
import { NodemailerAdapter } from '../adapters/nodemailer/nodemailer-adapter'

describe('Send mail Use Case', () => {
  let usersRepository: UsersRepository
  let emailGateway: EmailGateway
  let sut: SendMailUseCase
  
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    emailGateway = new NodemailerAdapter()
    sut = new SendMailUseCase(usersRepository, emailGateway)
  })
  
  it('should be able to send mail to users', async () => {
    await usersRepository.create({
      name: 'Anderson',
      email: 'nodamage@live.com'
    })

    const response = await sut.execute({
      template: 'welcome-template',
      from: 'no-reply@example.com',
      subject: 'Bem vindo!',
      message: 'Aqui você irá encontrar muitas notícias.'
    })

    expect(response.status).toEqual('Email enviado')
  })
})