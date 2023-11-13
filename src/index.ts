import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import path from 'path'
import uploadRouter from './routes/upload.route'
import authRouter from './routes/auth.route'
import userRouter from './routes/user.route'
import './auth/passport'

const app: any = express()
const PORT = 5000

app.listen(PORT, () => {
  console.log(PORT, ' listen...')
})

app.use(express.json())
app.use(express.urlencoded())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Methods',
  )
  
  res.header('Access-Control-Allow-Methods', 'GET, HEAD, POST, PUT, DELETE, PATCH, OPTIONS')
  next()
})

app.use('/', express.static(path.join(__dirname, 'upload/book')))

app.use(uploadRouter)

app.use(authRouter)

app.use(userRouter)