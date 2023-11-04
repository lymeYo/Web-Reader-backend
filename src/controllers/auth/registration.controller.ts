import { Request as ReqExpress, Response as ResExpress } from 'express'
import User from '../../models/user'
import Book from '../../models/book'

export const registration = async (req: ReqExpress, res: ResExpress) => {
  try {
    const { username, password } = req.body
    console.log('req.body', req.body)

    const existUser = await User.findOne({ where: { username } })
    if (existUser)
      return res.status(409).send('Пользователь с таким именем уже существует')

    const newUser = await User.create({ username, password, openedBookId: null })
    // const newBook = await Book.create({ userId: 1, bookRef: 'reeef', epubCfi: null})
    if (newUser) return res.send('succesfull')
  } catch (e) {
    console.error(e)
    return res.status(500).send('Не поулчается зарегестрирвоаться в данный момент')
  }
}
