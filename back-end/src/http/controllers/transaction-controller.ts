import { FastifyRequest, FastifyReply } from "fastify";
import { z } from 'zod'
import { makeTransactionUseCase } from "../../use-cases/factories/make-transaction-use-case";

export async function transaction(request: FastifyRequest, response: FastifyReply) {
  const transactionBodySchema = z.object({
    userId: z.string(),
    date: z.string().transform((string) => new Date(string)),
    value: z.number(),
    description: z.string(),
    transactionTypeId: z.number(),
    paymentMethodId: z.number(),
    categoryId: z.number(),
  })

  const { userId, date, value, description, transactionTypeId, paymentMethodId, categoryId } = transactionBodySchema.parse(request.body)

  const transactionUseCase = makeTransactionUseCase()

  await transactionUseCase.execute({
    userId,
    date,
    value,
    description,
    transactionTypeId,
    paymentMethodId,
    categoryId
  })

  return response.status(201).send()
}