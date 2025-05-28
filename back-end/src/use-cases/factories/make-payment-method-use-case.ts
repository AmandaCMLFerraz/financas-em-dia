import { PrismaPaymentMethodRepository } from "../../repositories/prisma/prisma-payment-method-repository";
import { PaymentMethodUseCase } from "../payment-method";

export function makePaymentMethodUseCase() {
  const paymentMethodRepositoy = new PrismaPaymentMethodRepository()
  const paymentMethodUseCase = new PaymentMethodUseCase(paymentMethodRepositoy)

  return paymentMethodUseCase
}