import express from "express";
import { google, signIn, signUp } from "../controllers/authController.js";

const authRoute = express.Router();

authRoute.post("/signup", signUp);
authRoute.post("/signIn", signIn);
authRoute.post("/google", google);

export default authRoute;
