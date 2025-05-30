import { Transaction } from "../generated/prisma";

export interface ExtractRepository {
  findById(id: string): Promise<Transaction | null>
  findMany(filters: {
    date?: Date;
    value?: number;
    transactionTypeId?: number;
    paymentMethodId?: number;
    categoryId?: number;
  }): Promise<Transaction[] | null>;
}