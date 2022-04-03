import { client } from '../../../../database/prisma/Client';
import { hash } from 'bcryptjs';
import { AppError } from '../../../../infra/errors/AppError';

type UserRequest = {
  name: string
  email: string
  password: string
}

export class CreateUserUseCase {
  async execute({ name, email, password }: UserRequest) {
    const verifyUser = await client.user.findFirst({
      where: {
        email
      }
    })

    if (verifyUser) {
      throw new AppError('Usuário já existe')
    }

    const passwordHash = await hash(password, 8)

    const user = await client.user.create({
      data: {
        name,
        email,
        password: passwordHash
      }
    })

    return user
  }
}
