import { CategoryRepository } from "../repositories/category-repository";

interface CategoryUseCaseRequest {
  description: string
}

export class CategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) { }

  async execute({ description }: CategoryUseCaseRequest) {
    await this.categoryRepository.create({
      description
    })
  }
}
