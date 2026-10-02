import express from 'express'
import { loginUser,registerruser,adminLogin } from '../controllers/usercontroller.js'

const userRouter = express.Router()

userRouter.post('/register',registerruser)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)

export default userRouter
