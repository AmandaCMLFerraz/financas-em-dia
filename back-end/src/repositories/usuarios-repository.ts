import { Prisma, Usuario } from "../generated/prisma/client";

export interface UsuariosRepository {
  findByEmail(email: string): Promise<Usuario | null>
  create(data: Prisma.UsuarioCreateInput): Promise<Usuario>
}