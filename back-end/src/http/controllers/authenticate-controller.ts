import { FastifyRequest, FastifyReply} from "fastify";
import { z } from 'zod'
import { PrismaUsersRepository } from "../../repositories/prisma/prisma-users-repository";
import { AuthenticateUseCase } from "../../use-cases/authenticate";
import { InvalidCredentialsError } from "../../use-cases/errors/invalid-credentials-error";
import { makeAuthenticateUseCase } from "../../use-cases/factories/make-authenticate-use-case";

export async function authenticate(request: FastifyRequest, response: FastifyReply) {
    const authenticateBodySchema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
    })

    const { email, password } = authenticateBodySchema.parse(request.body)

    try {
      const authenticateUseCase = makeAuthenticateUseCase()

      const user = await authenticateUseCase.execute({ 
        email,
        password,
      })

      const token = await response.jwtSign(
        {},
        {
          sub: user.user.id, // sub = subject (ID do usuário autenticado)
          expiresIn: '7d',
        }
      )

      return response.status(200).send({ token })

    } catch (error) {
      if (error instanceof InvalidCredentialsError) {
        return response.status(400).send()
      }
      
      throw error 
    }

    return response.status(200).send()
}