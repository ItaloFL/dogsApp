import { client } from "../../../../database/prisma/Client";



export class PerfilUserUseCase {

  async execute(id: string){

    const user = await client.user.findFirst({
      where: {
        id
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    })

    return user;
  }
}