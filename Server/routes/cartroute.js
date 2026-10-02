import express from 'express'
import { addToCart, getUserCart, updateCart } from '../controllers/cartcontroller.js'
import { authUser } from '../middleware/auth.js'

export const cartRouter = express.Router()

cartRouter.post('/get',authUser,getUserCart)
cartRouter.post('/add',authUser,addToCart)
cartRouter.post('/update',authUser,updateCart)