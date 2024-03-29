import express from "express";

const router = express.Router();

// get all datas
router.get("/data", (req, res) => {
  res.json({ message: "got datas" });
});

// get single data
router.get("/data/:id", (req, res) => {
  res.json({ message: "got single data" });
});

// edit data
router.patch("data/:id", (req, res) => {
  res.json({ message: "data edited" });
});

// post data
router.post("/create", (req, res) => {
  res.json({ message: "data posted" });
});

// delete data
router.delete("data/:id", (req, res) => {
  res.json({ message: "data deleted" });
});

export default router;
