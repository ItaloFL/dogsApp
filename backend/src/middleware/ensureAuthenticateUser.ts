import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../infra/errors/AppError";

type TokenPayLoad = {
  sub: string
}

export async function ensureAuthenticateUser(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if(!authHeader){
    throw new AppError('Token is missing')
  }

  const [, token] = authHeader.split(" ")

  try {
    const data = verify(token, "1cc19f80190295f1af7c6a36543bc8e5");

    const { sub: user_id } = data as TokenPayLoad;

    request.user = {
      id: user_id
    }

    next()
  } catch {
    throw new AppError("Invalid token!");
  }
}