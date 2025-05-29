import { PrismaTransactionRepository } from "../../repositories/prisma/prisma-transaction-repository"
import { TransactionUseCase } from "../transaction"
import { TransactionTypeUseCase } from "../transaction-type"

export function makeTransactionUseCase() {
  const transactionRepository = new PrismaTransactionRepository()
  const transactionUseCase = new TransactionUseCase(transactionRepository)

  return transactionUseCase
}

