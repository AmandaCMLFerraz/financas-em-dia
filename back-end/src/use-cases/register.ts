import { hash } from "bcryptjs"
import { UsersRepository } from "../repositories/users-repository"

interface RegisterInterfaceRequest {
  name: string
  email: string
  password: string
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({ name, email, password }: RegisterInterfaceRequest) {
    const password_hash = await hash(password, 6)

    const emailExistente = await this.usersRepository.findByEmail(email)

    if (emailExistente) {
      throw new Error('E-mail já está em uso.')
    }

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
  }
}
