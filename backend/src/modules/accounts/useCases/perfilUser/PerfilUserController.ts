import { Request, Response } from 'express'
import { PerfilUserUseCase } from './PerfilUserUseCase';

export class PerfilUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.user ;
    
    const perfilUserUseCase = new PerfilUserUseCase();

    const user = await perfilUserUseCase.execute(id);

    return response.json(user)
  }
}
