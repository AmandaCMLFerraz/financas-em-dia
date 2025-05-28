import { PaymentMethodRepository } from "../repositories/payment-method-repository"

interface PaymentMethodUseCaseRequest {
  description: string
}

export class PaymentMethodUseCase {
  constructor(private paymentMethodRepository: PaymentMethodRepository) { }

  async execute({ description }: PaymentMethodUseCaseRequest) {
    await this.paymentMethodRepository.create({
      description
    })
  }
}
