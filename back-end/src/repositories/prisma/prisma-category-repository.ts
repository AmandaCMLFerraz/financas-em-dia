import { Category, Prisma } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";
import { CategoryRepository } from "../category-repository";

export class PrismaCategoryRepository implements CategoryRepository {
  async findById(id: number): Promise<Category | null> {
    const category = await prisma.category.findUnique({
      where: {
        id,
      }
    })

    return category
  }

  async create(data: Prisma.CategoryCreateInput) {
    const category = await prisma.category.create({
      data,
    })
    return category

  }
}