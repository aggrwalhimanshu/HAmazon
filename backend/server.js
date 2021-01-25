import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import orderRouter from "./routers/orderRouter.js";
import path from "path";

const enVar = dotenv;
enVar.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//console.log(process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/hamazon", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLAIENT_ID || "sb");
});

app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
);

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(process.env.PORT);
  console.log(`Serve at http://localhost:${port}`);
});
