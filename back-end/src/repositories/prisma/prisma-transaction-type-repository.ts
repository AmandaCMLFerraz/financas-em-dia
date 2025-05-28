import { TransactionType, Prisma } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";
import { TransactionTypeRepository } from "../transaction-type-repository";

export class PrismaTransactionTypeRepository implements TransactionTypeRepository {
  async findById(id: string): Promise<TransactionType | null> {
    const transactionType = await prisma.transactionType.findUnique({
      where: {
        id,
      }
    })
    return transactionType
  }

  async create(data: Prisma.TransactionTypeCreateInput){
    const transactionType = await prisma.transactionType.create({
      data,
    })

    return transactionType
  }
}