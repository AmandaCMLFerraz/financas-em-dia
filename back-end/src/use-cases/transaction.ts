import { TransactionRepository } from "../repositories/transaction-repository";

interface TransactionUseCaseRequest {
  userId: string,
  date: Date,
  value: number,
  description: string,
  transactionTypeId: number,
  paymentMethodId: number,
  categoryId: number,
}

export class TransactionUseCase {
  constructor(private transactionRepository: TransactionRepository) { }

  async execute({ userId, date, value, description, transactionTypeId, paymentMethodId, categoryId }: TransactionUseCaseRequest) {
    await this.transactionRepository.create({
      user: { connect: { id: userId } },
      date,
      value,
      description,
      transaction_type: { connect: { id: transactionTypeId } },
      payment_method: { connect: { id: paymentMethodId } },
      category: { connect: { id: categoryId } }
    })
  }
}