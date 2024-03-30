import { user } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/errorHandler.js";

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required")); 
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  try {
    const registeredUser = await user.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "signup successfull" });
  } catch (error) {
    next(error);
  }
};
