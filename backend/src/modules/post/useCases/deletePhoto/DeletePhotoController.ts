import { Request, Response } from "express";
import { DeletePhotoUseCase } from "./DeletePhotoUseCase";



export class DeletePhotoController {

  async handle(request: Request, response: Response){

    const { id } = request.params;

    const deletePhotoUseCase = new DeletePhotoUseCase()

    await deletePhotoUseCase.execute(id)

    return response.status(204).json("Deletada com sucesso")
    
  }
}