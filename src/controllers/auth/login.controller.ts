import { Request as ReqExpress, Response as ResExpress } from 'express'
import User, { UserModel } from '../../models/user'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
  try {
    const { username, password } = req.body
    console.log('req.body - ', req.body)  
    

    const user: UserModel | null = await User.findOne({ where: { username } })

    if (!user || user.password !== password)
      return res
        .status(401)
        .send({ message: 'Пользователя с такими данными не существует' })

    const token = jwt.sign(
      {
        id: user?.id,
        username: user?.username,
      },
      process.env.JWT_SECRET as string,
    )

    return res.json({ token })
  } catch (e) {
    console.error(e)
    return res.status(500).send('Не поулчается войти в данный момент')
  }
}
