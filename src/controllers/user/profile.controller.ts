import User, { UserModel } from '../../models/user'

export const getProfile = async (req, res) => {
  try {
    const user: UserModel | null = await User.findOne({
      where: { username: req?.user?.username },
    })
    if (!user) return res.status(403).send('Неверные данные для входа')
    return res.json(user)
  } catch (e) {
    return res.status(500).send('Не поулчается войти в данный момент')
  }
}
