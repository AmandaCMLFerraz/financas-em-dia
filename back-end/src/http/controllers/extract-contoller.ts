import { FastifyReply, FastifyRequest } from "fastify";
import { makeExtractUseCase } from "../../use-cases/factories/make-extract-use-case";
import { ResourceNotFoundError } from "../../use-cases/errors/resource-not-found-error";

export async function extract(request: FastifyRequest, response: FastifyReply) {
  try {
    const { transactionId, date, value, transactionTypeId, paymentMethodId, categoryId } = request.query as {
      transactionId: string;
      date?: string;
      value?: string;
      transactionTypeId?: string;
      paymentMethodId?: string;
      categoryId?: string;
    }

    const filters = {
      date: date ? new Date(date) : undefined,
      value: value ? Number(value) : undefined,
      transactionTypeId: transactionTypeId ? Number(transactionTypeId) : undefined,
      paymentMethodId: paymentMethodId ? Number(paymentMethodId) : undefined,
      categoryId: categoryId ? Number(categoryId) : undefined,
    }

    const extractUseCase = makeExtractUseCase();

    const result = await extractUseCase.execute({
      transactionId,
      filters,
    })

    return response.status(200).send(result);
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return response.status(404).send({ message: "Transação não encontrada." });
    }

    throw error; 
  }
}