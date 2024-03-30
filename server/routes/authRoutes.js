import express from "express";
import { signUp } from "../controllers/authController.js";

const authRoute = express.Router();

authRoute.post("/signup", signUp);

export default authRoute;
