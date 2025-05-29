import { Transaction, Prisma } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";
import { TransactionRepository } from "../transaction-repository";

export class PrismaTransactionRepository implements TransactionRepository {
  async findById(id: string): Promise<Transaction | null> {
    const transaction = await prisma.transaction.findUnique({
      where: {
        id,
      }
    })

    return transaction
  }

  async findMany(filters: { date?: Date; value?: number; transactionTypeId?: number; paymentMethodId?: number; categoryId?: number; }): Promise<Transaction[] | null> {
    const transaction = await prisma.transaction.findMany({
      where:{
        ...(filters.date && { date: filters.date }),
        ...(filters.value && { number: filters.value }),
        ...(filters.transactionTypeId && { number: filters.transactionTypeId }),
        ...(filters.paymentMethodId && { number: filters.paymentMethodId }),
        ...(filters.categoryId && { number: filters.categoryId }),
      }
    })

    return transaction
  }

  async create(data: Prisma.TransactionCreateInput) {
    const transaction = await prisma.transaction.create({
      data,
    })

    return transaction
  }
}