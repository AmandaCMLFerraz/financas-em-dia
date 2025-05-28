import { PrismaTransactionTypeRepository } from "../../repositories/prisma/prisma-transaction-type-repository"
import { TransactionTypeUseCase } from "../transaction-type"

export function makeTransactionTypeUseCase() {
  const transactionTypeRepository = new PrismaTransactionTypeRepository()
  const transactionTypeUseCase = new TransactionTypeUseCase(transactionTypeRepository)

  return transactionTypeUseCase
}

