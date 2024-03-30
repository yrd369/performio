import express from "express";
import "dotenv/config";
import router from "./routes/router.js";
import mongoose from "mongoose";
import cors from "cors";

const server = express();

// middleware
server.use(express.json());
server.use(cors());
server.use(router);

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
