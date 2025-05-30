import { Transaction } from "../generated/prisma"
import { TransactionRepository } from "../repositories/transaction-repository"
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
    private transactionRepository: TransactionRepository) { }

  async execute({ transactionId, filters }: ExtractUseCaseRequest): Promise<ExtractUseCaseResponse> {
    if (transactionId) {
      const transaction = await this.transactionRepository.findById(transactionId)

      if (!transaction) {
        throw new ResourceNotFoundError()
      }
      return {
        transactions: [transaction],
      }
    }


    const transactions = await this.transactionRepository.findMany(filters) ?? []

    return {
      transactions,
    }
  }
}