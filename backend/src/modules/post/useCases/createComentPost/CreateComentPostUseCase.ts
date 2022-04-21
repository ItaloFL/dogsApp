import { client } from '../../../../database/prisma/Client'
import { AppError } from '../../../../infra/errors/AppError'

type ComentRequest = {
  postId: string
  coment: string
  author: string
}

export class CreateComentPostUseCase {
  async execute({ coment, author, postId }: ComentRequest) {
    const verifyPost = await client.post.findFirst({
      where: {
        id: postId
      }
    })

    if (!verifyPost) throw new AppError('Postagem não encontrada!')

    const Postcoment = await client.coments.create({
      data: {
        postId,
        author,
        coment
      },
      select: {
        id: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        },
        post: {
          select: {
            id: true,
            name: true,
            peso: true,
            idade: true,
            image: true,
            author: true,
            Coments: true
          }
        },
        coment: true
      }
    })

    return Postcoment
  }
}
