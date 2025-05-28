import { TransactionTypeRepository } from "../repositories/transaction-type-repository";

interface TransactionTypeUseCaseRequest {
  description: string
}

export class TransactionTypeUseCase {
  constructor(private transactionTypeRepository: TransactionTypeRepository) {}

    async execute({ description }: TransactionTypeUseCaseRequest) {
      await this.transactionTypeRepository.create({
        description,
      })
    }
}