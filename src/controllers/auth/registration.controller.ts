import { Request as ReqExpress, Response as ResExpress } from 'express'
import User from '../../models/user'

export const registration = async (req: ReqExpress, res: ResExpress) => {
  try {
    const { username, password } = req.body
    console.log('req.body', req.body)

    const existUser = await User.findOne({ where: { username } })
    if (existUser)
      return res.status(409).send('Пользователь с таким именем уже существует')

      const newUser = await User.create({ username, password, bookRef: null, epubCfi: null })
    // const newUser = await User.create({ username, password, bookRef: null, epubCfi: null, books: [
    //   {
    //     ref: 'its ref 1',
    //     cfi: 'its cfi 1'
    //   },
    //   {
    //     ref: 'its ref 2',
    //     cfi: 'its cfi 2'
    //   }
    // ]})
    if (newUser) return res.send('succesfull')
  } catch (e) {
    console.error(e)
    return res.status(500).send('Не поулчается зарегестрирвоаться в данный момент')
  }
}
