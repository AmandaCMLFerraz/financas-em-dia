import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod'
import { makePaymentMethodUseCase } from "../../use-cases/factories/make-payment-method-use-case";

export async function paymentMethod(request: FastifyRequest, response: FastifyReply) {
  const paymentMethodBodySchema = z.object({
    description: z.string(),
  })

  const { description } = paymentMethodBodySchema.parse(request.body)

  const paymentMethodUseCase = makePaymentMethodUseCase()

  await paymentMethodUseCase.execute({
    description
  })
}