import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod'
import { makeTransactionTypeUseCase } from "../../use-cases/factories/make-transaction-type-use-case";

export async function transactionType(request: FastifyRequest, response: FastifyReply) {
  const transactionTypeBodySchema = z.object({
    description: z.string(),
  })

  const { description } = transactionTypeBodySchema.parse(request.body)

  const transactionTypeUseCase = makeTransactionTypeUseCase()

  await transactionTypeUseCase.execute({
    description
  })
}