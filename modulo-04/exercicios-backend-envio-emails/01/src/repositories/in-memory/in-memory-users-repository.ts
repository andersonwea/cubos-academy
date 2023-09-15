import { Prisma, User } from "@prisma/client";
import { UsersRepository } from "../users-repository";
import { randomUUID } from "node:crypto";

export class InMemoryUsersRepository implements UsersRepository {
  private items: Array<User> = []
  
  async findMany() {
    const users = this.items.filter(item => item)

    return users
  }

  async create(data: Prisma.UserCreateInput) {
    const { name, email } = data
    
    const user = {
      id: randomUUID(),
      name,
      email
    }

    this.items.push(user)

    return user
  }

  async findByEmail(email: string) {
    const user = this.items.find(item => item.email === email)

    if (!user) {
      return null
    }

    return user
  }
}