import { User } from "@prisma/client"

export interface EmailContext {
  userName: string
  message: string
}

export interface Email {
  from: string
  subject: string
  message: string
  template: string
}

export interface EmailGateway {
  sendEmail(email: Email, user: User): Promise<string>
}