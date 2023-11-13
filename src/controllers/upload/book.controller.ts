import { dividerId } from "../../utils/handleBookname"

export const getUploadedBook = async (req: any, res: any) => {
  if (!req.file) return res.status(400).json({ msg: 'No uploaded file' })
  
  const filename = req.file.filename
  const resData = {
    bookRef: `http://localhost:5000/${filename}`,
    bookName: filename?.split(dividerId)[1]
  }
  res.json(resData) //возвращает ссылку на скачанный файл
}

export const getBookNameByRef = (req: any, res: any) => {
  const { bookRef } = req.body
  const ext = '.epub'
  const bookName = bookRef?.split(dividerId)[1].split(ext)[0]

  res.json(bookName) //возвращает ссылку на скачанный файл
}