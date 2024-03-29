import express from "express";
import { dataModel } from "../models/dataModel.js";

const router = express.Router();

// get all datas
router.get("/data", async (req, res) => {
  const allData = await dataModel.find({});
  res.json(allData);
});

// get single data
router.get("/data/:id", async (req, res) => {
  const { id } = req.params;
  const singleData = await dataModel.find({ _id: id });
  res.json(singleData);
});

// edit data
router.patch("/data/:id", async (req, res) => {
  const { id } = req.params;
  const editData = await dataModel.findByIdAndUpdate({ _id: id }, req.body);
  res.json(editData);
});

// post data
router.post("/create", (req, res) => {
  res.json({ message: "data posted" });
});

// delete data
router.delete("/data/:id", (req, res) => {
  res.json({ message: "data deleted" });
});

export default router;
