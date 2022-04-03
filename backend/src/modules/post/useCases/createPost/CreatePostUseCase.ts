import { client } from "../../../../database/prisma/Client"

type PostRequest = {
  name: string
  peso: string
  idade: string
  image?: string
}

export class CreatePostUseCase {
  async execute({ name, peso, idade, image }: PostRequest) {

    const post = await client.post.create({
      data: {
        name,
        peso,
        idade, 
        image
      }
    })

    return post;
  }
}
