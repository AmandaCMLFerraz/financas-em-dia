import { compare } from "bcryptjs";
import { UsersRepository } from "../repositories/users-repository";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";
import { User } from "../generated/prisma";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface GetUserUseProfileCaseRequest {
  userId: string
}

interface GetUserProfileUseCaseResponse {
  user: User
}

export class AuthenticateUseCase {
  constructor(
    private usersRepository: UsersRepository
  ) {}

  async execute({ userId }: GetUserUseProfileCaseRequest): Promise<GetUserProfileUseCaseResponse> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    return {
      user,
    }
  }
}