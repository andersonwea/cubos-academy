import { Prisma } from "@prisma/client";
import { UsersRepository } from "../users-repository";
import { prisma } from "../../lib/prisma";

export class PrismaUsersRepository implements UsersRepository {
  async create(data: Prisma.UserCreateInput) {
    const { name, email } = data
    
    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    })

    return user
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    return user
  }

  async findMany() {
    const users = await prisma.user.findMany()

    return users
  }
}