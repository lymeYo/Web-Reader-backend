import { Router } from 'express'
import { registration } from '../controllers/auth/registration.controller'
import { login } from '../controllers/auth/login.controller'

const router = Router()

router.post('/auth/registration', registration)

router.post('/auth/login', login)

export default router
