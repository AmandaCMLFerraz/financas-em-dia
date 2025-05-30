import { Transaction } from "../generated/prisma"
import { TransactionRepository } from "../repositories/transaction-repository"
import { ResourceNotFoundError } from "./errors/resource-not-found-error"

interface ExtractUseCaseRequest {
  transactionId: string
}

interface ExtractUseCaseResponse {
  transactions: Transaction[]
}

export class ExtractUseCase {
  constructor(
    private transactionRepository: TransactionRepository
  ) {}

  async execute({ transactionId }: ExtractUseCaseRequest): Promise<ExtractUseCaseResponse> {
    const transaction = await this.transactionRepository.findById(transactionId)

    if (!transaction) {
      throw new ResourceNotFoundError()
    }

    return {
      transactions: [transaction],
    }
  }
}