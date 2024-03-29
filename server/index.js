import express from "express";
import "dotenv/config";
import router from "./routes/router.js";

const server = express();

server.use(router)

server.listen(process.env.PORT, (error) => {
  error && console.log(error);
});
