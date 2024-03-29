import express from "express";

const server = express();

server.get("/products", (req, res) => {
  res.json({ name: "hai" });
});

server.listen(4000, (error) => {
  error && console.log(error);
});
