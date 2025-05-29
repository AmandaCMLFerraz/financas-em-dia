import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod'
import { makeCategoryUseCase } from "../../use-cases/factories/make-category-use-case";

export async function category(request: FastifyRequest, response: FastifyReply) {
  const categoryBodySchema = z.object({
    description: z.string()
  })

  const { description } = categoryBodySchema.parse(request.body)

  const categoryUseCase = makeCategoryUseCase()

  await categoryUseCase.execute({
    description
  })
}