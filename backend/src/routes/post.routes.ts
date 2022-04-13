import { Router } from 'express'
import multer from 'multer'
import { CreatePostController } from '../modules/post/useCases/createPost/CreatePostController'
import multerConfig from '../config/multer'
import { ensureAuthenticateUser } from '../middleware/ensureAuthenticateUser'
import { ListPostController } from '../modules/post/useCases/listPost/ListPostController'
import { GetPhotoPostController } from '../modules/post/useCases/getPhotoPost/GetPhotoPostController'

const postRoutes = Router()

const createPostController = new CreatePostController()
const listPostController = new ListPostController()
const getPhotoPostController = new GetPhotoPostController()
const storage = multer(multerConfig)

postRoutes.post('/createPost', storage.single('image'), ensureAuthenticateUser, createPostController.handle)
postRoutes.get('/post', listPostController.handle)
postRoutes.get('/photo/:id', getPhotoPostController.handle)

export { postRoutes }
