
import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

userRoutes.post('/user', createUserController.handle);
userRoutes.post('/login', authenticateUserController.handle)

export { userRoutes }