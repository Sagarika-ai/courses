import express from "express";
import {adminAuth} from '../middleware/adminAuth.js'
import {authUser} from '../middleware/auth.js'

import {
  allOrder,
  placeOrder,
  placeOrderStripe,
  updateStatus,
  userOrder,
  verifyStripe,
} from "../controllers/ordercontroller.js";

export const orderRoute = express.Router();

//admin features
orderRoute.post("/list", adminAuth, allOrder);
orderRoute.post("/status", adminAuth, updateStatus);

//payment features
orderRoute.post("/place", authUser, placeOrder);
orderRoute.post("/stripe", authUser, placeOrderStripe);

//user features
orderRoute.post("/userorders", authUser, userOrder);

orderRoute.post("/verifystripe", authUser, verifyStripe);
