import { client } from "../../../../database/prisma/Client";



export class ListPostUseCase {

  async execute(){

    const posts = await client.post.findMany();

    return posts
  }
}