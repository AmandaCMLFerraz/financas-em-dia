import { PaymentMethod, Prisma } from "../generated/prisma";

export interface PaymentMethodRepository {
  findById(id: number): Promise<PaymentMethod | null>
  create(data: Prisma.PaymentMethodCreateInput): Promise<PaymentMethod> 
}