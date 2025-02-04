import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import routeUsers from "./routes/userRoute.js";
import orderRoute from "./routes/orderRoute.js";
import "dotenv/config";

const app = express();
const port = 4001;
app.use(express.json());
app.use(cors());
connectDB(); 
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", routeUsers);
app.use("/api/payment", orderRoute);
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
