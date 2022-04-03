import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { routes } from './routes/routes';
import cors from 'cors';
import { AppError } from './infra/errors/AppError';
import 'dotenv';
import path from 'path'

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))

app.use(routes);

app.use((err: Error, request: Request, response: Response, next:NextFunction) =>{
  if(err instanceof AppError){
    return response.status(err.statusCode).json({
        message: err.message
        
      })
      
    }
    
    return response.status(500).json({
      status: "error",
      message: `Internal server Error - ${err.message}`
    })
  })

app.listen('3333', () => {
  console.log('Server is running in port 3333')
})
