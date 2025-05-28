import { PaymentMethod, Prisma } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";
import { PaymentMethodRepository } from "../payment-method-repository";

export class PrismaPaymentMethodRepository implements PaymentMethodRepository {
  async findById(id: number): Promise<PaymentMethod | null> {
    const paymentMethod = await prisma.paymentMethod.findUnique({
      where: {
        id,
      }
    })

    return paymentMethod
  }

  async create(data: Prisma.PaymentMethodCreateInput) {
    const paymentMethod = await prisma.paymentMethod.create({
      data,
    })

    return paymentMethod
  }
}