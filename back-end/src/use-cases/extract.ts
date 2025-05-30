import { Transaction } from "../generated/prisma"
import { ExtractRepository } from "../repositories/extract-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error"

interface ExtractUseCaseRequest {
  transactionId: string;
  filters: {
    date?: Date;
    value?: number;
    transactionTypeId?: number;
    paymentMethodId?: number;
    categoryId?: number;
  }
}

interface ExtractUseCaseResponse {
  transactions: Transaction[]
}

export class ExtractUseCase {
  constructor(
    private extractRepository: ExtractRepository) { }

  async execute({ transactionId, filters }: ExtractUseCaseRequest): Promise<ExtractUseCaseResponse> {
    if (transactionId) {
      const transaction = await this.extractRepository.findById(transactionId)

      if (!transaction) {
        throw new ResourceNotFoundError()
      }
      return {
        transactions: [transaction],
      }
    }


    const transactions = await this.extractRepository.findMany(filters) ?? []

    return {
      transactions,
    }
  }
}