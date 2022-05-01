import { Router } from 'express'
import multer from 'multer'
import { CreatePostController } from '../modules/post/useCases/createPost/CreatePostController'
import multerConfig from '../config/multer'
import { ensureAuthenticateUser } from '../middleware/ensureAuthenticateUser'
import { ListPostController } from '../modules/post/useCases/listPost/ListPostController'
import { GetPhotoPostController } from '../modules/post/useCases/getPhotoPost/GetPhotoPostController'
import { CreateComentPostController } from '../modules/post/useCases/createComentPost/CreateComentPostController'
import { DeletePhotoController } from '../modules/post/useCases/deletePhoto/DeletePhotoController'

const postRoutes = Router()

const createPostController = new CreatePostController()
const listPostController = new ListPostController()
const getPhotoPostController = new GetPhotoPostController()
const createComentPostController = new CreateComentPostController()
const deletePhotoController = new DeletePhotoController()
const storage = multer(multerConfig)

postRoutes.post('/createPost', ensureAuthenticateUser, storage.single('image'),  createPostController.handle)
postRoutes.get('/post', ensureAuthenticateUser, listPostController.handle)
postRoutes.get('/photo/:id', getPhotoPostController.handle)
postRoutes.post('/coment/:postId', ensureAuthenticateUser, createComentPostController.handle)
postRoutes.delete('/post/:id', ensureAuthenticateUser, deletePhotoController.handle)

export { postRoutes }
