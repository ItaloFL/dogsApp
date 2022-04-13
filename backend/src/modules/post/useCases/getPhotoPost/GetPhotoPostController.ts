import { Request, Response } from "express";
import { GetPhotoPostUseCase } from "./GetPhotoPostUseCase";



export class GetPhotoPostController {

  async handle(request: Request, response: Response){

    const { id } = request.params;

    const getPhotoPostUseCase = new GetPhotoPostUseCase();

    const postImage = await getPhotoPostUseCase.execute(id);

    return response.json(postImage);
  }
}