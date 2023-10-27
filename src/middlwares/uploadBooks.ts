import multer from 'multer'
import path from 'path'
import handleBookname from '../utils/handleBookname'

const imagesPath = path.resolve(__dirname, '../upload/book')

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, imagesPath)
  },
  filename(req, file, cb) {
    cb(
      null,
      handleBookname(file.originalname),
    )
  },
})

const uploadImages = multer({ storage })

export default uploadImages
