import { Email, EmailGateway } from "../adapters/email-gateway"
import { UsersRepository } from "../repositories/users-repository"

interface SendMailUseCaseRequest extends Email {}

interface SendMailUseCaseResponse {
  status: string
}

export class SendMailUseCase {
  constructor(private usersRepository: UsersRepository, private emailGateway: EmailGateway) {}

  async execute(email: SendMailUseCaseRequest): Promise<SendMailUseCaseResponse> {
    const users = await this.usersRepository.findMany()

    for await(let user of users) {
      await this.emailGateway.sendEmail(email, user)
    }

    return {
      status: 'Email enviado'
    }
  }
}