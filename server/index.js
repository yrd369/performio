import express from "express";
import "dotenv/config";
import router from "./routes/router.js";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/authRoutes.js";
import { configDotenv } from "dotenv";

configDotenv()
const server = express();

server.use(express.json());
server.use(cors());
server.use("/api/auth",authRoute);
server.use("/api",router);


// middleware
server.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// connecting database
const dataBaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    server.listen(process.env.PORT, () => {
      console.log("Database connected and running on port");
    });
  } catch (error) {
    console.log(error.message);
  }
};

dataBaseConnection();
