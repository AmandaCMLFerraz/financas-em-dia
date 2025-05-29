import { PrismaCategoryRepository } from "../../repositories/prisma/prisma-category-repository";
import { CategoryUseCase } from "../category-use-case";

export function makeCategoryUseCase() {
  const categoryRepository = new PrismaCategoryRepository()
  const categoryUseCase = new CategoryUseCase(categoryRepository)

  return categoryUseCase
}