const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "8888";

const cors = require("cors");
app.use(cors());

const dotenv = require("dotenv");
dotenv.config();

const conn = require("./config/connection");

app.get("/", async (req, res) => {
  console.log("call reached");
  db = await conn();
  let results = db.collection("skills").find({});
  let skills = await results.toArray();
  res.json(skills);
});

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
