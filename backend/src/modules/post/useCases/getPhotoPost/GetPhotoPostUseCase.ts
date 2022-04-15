import { client } from "../../../../database/prisma/Client";



export class GetPhotoPostUseCase {

  async execute(id: string){
    
    const postImage = client.post.findFirst({
      where: {
        id
      },
    })

    return postImage
  }
}