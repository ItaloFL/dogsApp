
import { Router } from "express";
import { ensureAuthenticateUser } from "../middleware/ensureAuthenticateUser";
import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { PerfilUserController } from "../modules/accounts/useCases/perfilUser/PerfilUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const perfilUserController = new PerfilUserController();

userRoutes.post('/user', createUserController.handle);
userRoutes.post('/login', authenticateUserController.handle);
userRoutes.get('/user', ensureAuthenticateUser, perfilUserController.handle)

export { userRoutes }