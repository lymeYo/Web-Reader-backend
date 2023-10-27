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

export const updateProfile = async (req, res) => {
  const { bookRef, epubCfi } = req.body

  try {
    const user: UserModel | null = await User.findOne({
      where: { username: req?.user?.username },
    })
    if (!user) return res.status(403).send('Неверные данные')
    user.bookRef = bookRef
    user.epubCfi = epubCfi
    await user.save()
    return res.json(user)
  } catch (e) {
    return res.status(500).send('Не поулчается обновить данные в данный момент')
  }
}

export const dropBook = async (req, res) => {
  try {
    const user: UserModel | null = await User.findOne({
      where: { username: req?.user?.username },
    })
    if (!user) return res.status(403).send('Неверные данные')
    user.bookRef = null
    user.epubCfi = null 
    await user.save()
    return res.json(user)
  } catch (e) {
    return res.status(500).send('Не поулчается обновить данные в данный момент')
  }
}