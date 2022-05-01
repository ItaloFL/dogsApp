import { Request, Response } from 'express'
import { ListPostUseCase } from './ListPostUseCase'

export class ListPostController {
  async handle(request: Request, response: Response) {
    
    const { id } = request.user;
    const { skip, take } = request.query;

    const listPostUseCase = new ListPostUseCase()

    const posts = await listPostUseCase.execute(id, String(skip), String(take));

    return response.json(posts);
  }
}
