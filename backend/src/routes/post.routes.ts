import { Router } from 'express'
import multer from 'multer'
import { CreatePostController } from '../modules/post/useCases/createPost/CreatePostController'
import multerConfig from '../config/multer'
import { ensureAuthenticateUser } from '../middleware/ensureAuthenticateUser'

const postRoutes = Router()

const createPostController = new CreatePostController()
const storage = multer(multerConfig)

postRoutes.post('/createPost', storage.single('image'), createPostController.handle)

export { postRoutes }
