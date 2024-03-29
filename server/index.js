import express from "express";
import "dotenv/config";
import router from "./routes/router.js";
import mongoose from "mongoose";

const server = express();

server.use(express.json());
server.use(router);

const dataBaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    server.listen(process.env.PORT, () => {
      console.log("Database connected and running on port");
    });
  } catch (error) {
    console.log(error);
  }
};

dataBaseConnection();
