import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import foodRouter from './routers/food.router.js';
import userRouter from './routers/user.router.js';
import { dbconnect } from './config/database.config.js';

dbconnect();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);

app.get("*", (req, res) => {
  res.status(404).send("<h1>Page not found on the server</h1>");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
