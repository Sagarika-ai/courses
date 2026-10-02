import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import dns from "dns";
import connectDb from "./config/dbConnect.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userroute.js";
import { productRouter } from "./routes/productroute.js";
import { cartRouter } from "./routes/cartroute.js";
import { orderRoute } from "./routes/orderroute.js";

// dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
    ],
    credentials: true,
  })
);

connectDb();
connectCloudinary();

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRoute);

app.listen(3000, () => {
  console.log("running on port 3000");
});
