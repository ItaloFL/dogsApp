import { client } from "../../../../database/prisma/Client";



export class ListPostUseCase {

  async execute(userid: string, skip: string, take: string){

    const posts = await client.post.findMany({
      where: {
        author: userid
      },
      skip: parseInt(skip),
      take: parseInt(take),
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