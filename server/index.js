import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDb } from "./database/db.js";
import adminRoutes from "./routes/admin.routes.js";
import authRoutes from "./routes/auth.routes.js";
import requestRoutes from "./routes/request.routes.js";
dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));


app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to the api");
});
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/requests", requestRoutes);

const port = process.env.PORT || 3000;

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
