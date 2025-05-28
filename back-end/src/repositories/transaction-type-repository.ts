import { Prisma, TransactionType } from "../generated/prisma/client";

export interface TransactionTypeRepository {
  findById(id: string): Promise<TransactionType | null>
  create(data: Prisma.TransactionTypeCreateInput): Promise<TransactionType>
}