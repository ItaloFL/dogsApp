import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const dest = path.resolve(__dirname, '..', '..', 'tmp', 'uploads');

export default {
  dest,
  storage: multer.diskStorage({
    destination: dest,
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(8);
      const filename = `${fileHash.toString('hex')}-${file.originalname}`



      callback(null, filename)
    }
  })
}