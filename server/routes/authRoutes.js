import express from "express";
import { signIn, signUp } from "../controllers/authController.js";

const authRoute = express.Router();

authRoute.post("/signup", signUp);
authRoute.post("/signIn",signIn)

export default authRoute;
