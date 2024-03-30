import express from "express";
import {
  deleteData,
  editData,
  getAllData,
  getSingleData,
  postData,
} from "../controllers/dataController.js";

const router = express.Router();

// get all datas
router.get("/data", getAllData);

// get single data
router.get("/data/:id", getSingleData);

// post data
router.post("/create", postData);

// edit data
router.patch("/data/:id", editData);

// delete data
router.delete("/data/:id", deleteData);

export default router;
