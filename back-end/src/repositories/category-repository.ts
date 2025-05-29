import { Category, Prisma } from "../generated/prisma";

export interface CategoryRepository {
  findById(id: number): Promise<Category | null>
  create(data: Prisma.CategoryCreateInput): Promise<Category | null>
}