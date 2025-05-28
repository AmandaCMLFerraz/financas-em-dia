import { prisma } from "../../lib/prisma"
import { Prisma, Usuario } from '../../generated/prisma/client'
import { UsuariosRepository } from "../usuarios-repository"

export class PrismaUsuariosRepository implements UsuariosRepository {
  async findByEmail(email: string): Promise<Usuario | null> {
    const usuario = await prisma.usuario.findUnique({
      where: {
        email,
      },
    })

    return usuario
  }
  
  async create(data: Prisma.UsuarioCreateInput) {
    const usuario = await prisma.usuario.create({
      data,
    })

    return usuario
  }
}
