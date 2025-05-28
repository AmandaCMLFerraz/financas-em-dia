import { FastifyRequest, FastifyReply} from "fastify";
import { z } from 'zod'
import { RegisterUseCase } from "../../use-cases/register";
import { PrismaUsersRepository } from "../../repositories/prisma/prisma-users-repository";

export async function register(request: FastifyRequest, response: FastifyReply) {
    const registroBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
    })

    const { name, email, password } = registroBodySchema.parse(request.body)

    try {
      const usuariosRepository = new PrismaUsersRepository()
      const registerUseCase = new RegisterUseCase(usuariosRepository)

      await registerUseCase.execute({
        name, 
        email,
        password,
      })
    } catch (error) {
      return response.status(409).send()      
    }

    return response.status(201).send()
}