import { Router } from 'express'
import { getProfile, updateProfile, dropBook } from '../controllers/user/profile.controller'
import passport from 'passport'

const router = Router()

router.get(
  '/user/profile',
  passport.authenticate('jwt', { session: false }),
  getProfile,
)
router.patch(
  '/user/profile',
  passport.authenticate('jwt', { session: false }),
  updateProfile,
)
router.delete(
  '/user/drop-book',
  passport.authenticate('jwt', { session: false }),
  dropBook,
)

export default router
