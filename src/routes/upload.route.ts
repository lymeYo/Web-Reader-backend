import { Request as ExRequest, Router } from 'express'
import uploadBooks from '../middlwares/uploadBooks'
import handleBookname, { dividerId } from '../utils/handleBookname'
import { getBookNameByRef, getUploadedBook } from '../controllers/upload/book.controller'

const router = Router()

router.post('/upload/book', uploadBooks.single('book'), getUploadedBook)

router.post('/upload/book/get-name', getBookNameByRef)

export default router


// https://stackoverflow.com/questions/12066118/reading-pdf-file-using-javascript