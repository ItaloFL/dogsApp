import { client } from "../../../../database/prisma/Client"

type PostRequest = {
  name: string
  peso: string
  idade: string
  image?: string
  author: string
}

export class CreatePostUseCase {
  async execute({ name, peso, idade, image, author }: PostRequest) {

    const post = await client.post.create({
      data: {
        name,
        peso, 
        idade,
        image,
        author
      }
    })

    return post;
  }
}
