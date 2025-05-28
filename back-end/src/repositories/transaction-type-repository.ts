import { Prisma, TransactionType } from "../generated/prisma/client";

export interface TransactionTypeRepository {
  findById(id: number): Promise<TransactionType | null>
  create(data: Prisma.TransactionTypeCreateInput): Promise<TransactionType>
}