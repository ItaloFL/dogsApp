import { Request, Response } from 'express'
import { CreateComentPostUseCase } from './CreateComentPostUseCase';

export class CreateComentPostController {
  async handle(request: Request, response: Response) {

    const { postId, coment } = request.body;
    const { author } = request.params;

    const createComentPostUseCase = new CreateComentPostUseCase();

    const comment = await createComentPostUseCase.execute({
      coment,
      postId,
      author
    })

    return response.json(comment)
  }
}
