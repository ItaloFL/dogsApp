import { client } from '../../../../database/prisma/Client'

export class GetPhotoPostUseCase {
  async execute(id: string) {
    const postImage = client.post.findFirst({
      where: {
        id
      },
      select: {
        id: true,
        name: true,
        peso: true,
        idade: true,
        image: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        Coments: {
          select: {
            id: true,
            user: {
              select: {
                id: true,
                name: true,
                email: true
              }
            },
            coment: true,
            created_at: true
          }
        }
      }
    })

    return postImage
  }
}
