import { Request as ExRequest, Router } from 'express'
import uploadBooks from '../middlwares/uploadBooks'
import handleBookname from '../utils/handleBookname'

const router = Router()

router.post('/upload/book', uploadBooks.single('book'), (req: any, res) => {
  if (!req.file) return res.status(400).json({ msg: 'No uploaded file' })
  
  res.json(`http://localhost:5000/${handleBookname(req.file.filename)}`) //возвращает ссылку на скачанный файл
})

export default router


// https://stackoverflow.com/questions/12066118/reading-pdf-file-using-javascript