import { PrismaUsersRepository } from "../../repositories/prisma/prisma-user-repository";
import { RegisterUseCase } from "../register";

export function makeRegiterUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const regiterUseCase = new RegisterUseCase(usersRepository)

  return regiterUseCase
}