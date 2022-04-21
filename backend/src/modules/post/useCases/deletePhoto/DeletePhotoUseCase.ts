import { client } from "../../../../database/prisma/Client";
import { AppError } from "../../../../infra/errors/AppError";



export class DeletePhotoUseCase {

  async execute(id: string){

    const verifyPhoto = await client.post.findFirst({
      where: {
        id
      }
    })

    if(!verifyPhoto) throw new AppError('Foto não encontrada');

    await client.post.delete({
      where: {
        id
      }
    })
  }
}