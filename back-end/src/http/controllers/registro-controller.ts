import { FastifyRequest, FastifyReply} from "fastify";
import { z } from 'zod'
import { RegistroUseCase } from "../../use-cases/registro";
import { PrismaUsuariosRepository } from "../../repositories/prisma/prisma-usuarios-repository";

export async function registro(request: FastifyRequest, response: FastifyReply) {
    const registroBodySchema = z.object({
        nome: z.string(),
        email: z.string().email(),
        senha: z.string().min(6),
    })

    const { nome, email, senha } = registroBodySchema.parse(request.body)

    try {
      const usuariosRepository = new PrismaUsuariosRepository()
      const registroUseCase = new RegistroUseCase(usuariosRepository)

      await registroUseCase.execute({
        nome, 
        email,
        senha,
      })
    } catch (error) {
      return response.status(409).send()      
    }

    return response.status(201).send()
}