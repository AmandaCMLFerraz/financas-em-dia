import { hash } from "bcryptjs"
import { prisma } from "../lib/prisma"
import { UsuariosRepository } from "../repositories/usuarios-repository"

interface RegistroInterface {
  nome: string
  email: string
  senha: string
}

export class RegistroUseCase {
  constructor(private usuariosRepository: UsuariosRepository) { }

  async execute({ nome, email, senha }: RegistroInterface) {
    const senha_hash = await hash(senha, 6)

    const emailExistente = await this.usuariosRepository.findByEmail(email)

    if (emailExistente) {
      throw new Error('E-mail já está em uso.')
    }

    await this.usuariosRepository.create({
      nome,
      email,
      senha_hash,
    })
  }
}
