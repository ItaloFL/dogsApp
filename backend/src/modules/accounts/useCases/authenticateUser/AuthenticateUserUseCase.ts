import { client } from '../../../../database/prisma/Client'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { AppError } from '../../../../infra/errors/AppError'

type LoginUserRequest = {
  email: string
  password: string
}
export class AuthenticateUserUseCase {
  async execute({ email, password }: LoginUserRequest) {
    const verifyUser = await client.user.findFirst({
      where: {
        email
      }
    })

    if (!verifyUser) {
      throw new AppError('Usuário ou senha incorretos')
    }

    const verifyPassword = await compare(password, verifyUser.password)

    if (!verifyPassword) {
      throw new AppError('Usuário ou senha incorretos')
    }

    const token = sign({}, '1cc19f80190295f1af7c6a36543bc8e5', {
      expiresIn: '1d',
      subject: verifyUser.id
    })

    return token
  }
}
