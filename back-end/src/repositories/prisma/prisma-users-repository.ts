import { prisma } from "../../lib/prisma"
import { Prisma, User } from '../../generated/prisma/client'
import { UsersRepository } from "../users-repository"

export class PrismaUsersRepository implements UsersRepository {
  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    return user
  }
  
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }
  
  async create(data: Prisma.UserCreateInput) {
    const usuario = await prisma.user.create({
      data,
    })

    return usuario
  }
}
