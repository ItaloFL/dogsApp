import { client } from "../../../../database/prisma/Client";



export class ListPostUseCase {

  async execute(){

    const posts = await client.post.findMany({
      select: {
        name: true,
        id: true,
        idade: true,
        image: true,
        peso: true,
        Coments: true,
      },
    });

    return posts
  }
}