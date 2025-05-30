import { Transaction } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";
import { ExtractRepository } from "../extract-repository";

export class PrismaExtractRepository implements ExtractRepository {
  async findById(id: string): Promise<Transaction | null> {
    const transaction = await prisma.transaction.findUnique({
      where: {
        id,
      }
    })

    return transaction
  }

  async findMany(filters: { date?: Date; value?: number; transactionTypeId?: number; paymentMethodId?: number; categoryId?: number; }): Promise<Transaction[] | null> {
    const transactions = await prisma.transaction.findMany({
      where:{
        ...(filters.date && { date: filters.date }),
        ...(filters.value && { value: filters.value }),
        ...(filters.transactionTypeId && { transactionTypeId: filters.transactionTypeId }),
        ...(filters.paymentMethodId && { paymentMethodId: filters.paymentMethodId }),
        ...(filters.categoryId && { categoryId: filters.categoryId }),
      }
    })

    return transactions
  }
}