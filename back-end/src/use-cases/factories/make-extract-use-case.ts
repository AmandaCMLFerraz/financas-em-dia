import { PrismaPaymentMethodRepository } from "../../repositories/prisma/prisma-payment-method-repository";
import { ExtractUseCase } from "../extract";

export function makeExtractUseCase() {
  const extractRepositoy = new PrismaPaymentMethodRepository()
  const extractUseCase = new ExtractUseCase(extractRepositoy)

  return extractUseCase
}