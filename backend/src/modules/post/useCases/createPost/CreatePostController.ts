import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";



export class CreatePostController {

  async handle(request: Request, response: Response){

    const { name, peso, idade } = request.body;
    const image = request?.file?.filename;

    const createPostUseCase = new CreatePostUseCase();

    const post = await createPostUseCase.execute({
      name,
      peso,
      idade,
      image: `${process.env.APP_URL}/files/${image}`
    })

    return response.json(post)
  }
}