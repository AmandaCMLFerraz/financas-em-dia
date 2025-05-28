import { PrismaTransactionTypeRepository } from "../../repositories/prisma/prisma-transaction-type-repository"
import { TransactionTypeUseCase } from "../transaction-type"

export function makeTransactionTypeUseCase() {
  const transactionRepository = new PrismaTransactionTypeRepository()
  const transactionTypeUseCase = new TransactionTypeUseCase(transactionRepository)

  return transactionTypeUseCase
}

