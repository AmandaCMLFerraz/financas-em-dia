import { PrismaExtractRepository } from "../../repositories/prisma/prisma-extract-repository";
import { ExtractUseCase } from "../extract";

export function makeExtractUseCase() {
  const extractRepository = new PrismaExtractRepository()
  const extractUseCase = new ExtractUseCase(extractRepository)

  return extractUseCase
}