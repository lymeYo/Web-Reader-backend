import { Router } from 'express'
import { getProfile } from '../controllers/user/profile.controller'
import { getBooks, addBook, removeBook, openBook, updateUserBook } from '../controllers/user/books.controller'
import passport from 'passport'

const router = Router()

router.get(
  '/user/profile',
  passport.authenticate('jwt', { session: false }),
  getProfile,
)

router.get(
  '/user/books',
  passport.authenticate('jwt', { session: false }),
  getBooks,
)
router.post(
  '/user/books',
  passport.authenticate('jwt', { session: false }),
  addBook,
)
router.post(
  '/user/books/open',
  passport.authenticate('jwt', { session: false }),
  openBook,
)
router.delete(
  '/user/books',
  passport.authenticate('jwt', { session: false }),
  removeBook,
)
router.patch(
  '/user/books', 
  passport.authenticate('jwt', { session: false }),
  updateUserBook
)

export default router
