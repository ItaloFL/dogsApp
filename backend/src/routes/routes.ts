import { Router } from "express";
import { postRoutes } from "./post.routes";
import { userRoutes } from "./users.routes";

const routes = Router()

routes.use(userRoutes);
routes.use(postRoutes);


export { routes };