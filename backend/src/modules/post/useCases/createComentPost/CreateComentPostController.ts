import { Request, Response } from 'express'
import { CreateComentPostUseCase } from './CreateComentPostUseCase';

export class CreateComentPostController {
  async handle(request: Request, response: Response) {

    const { coment } = request.body;
    const { postId } = request.params;
    const { id: author } = request.user;

    const createComentPostUseCase = new CreateComentPostUseCase();

    const comment = await createComentPostUseCase.execute({
      coment,
      postId,
      author
    })

    return response.json(comment)
  }
}
