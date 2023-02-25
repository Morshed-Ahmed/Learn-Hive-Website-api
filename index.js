const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 5000;

const coursesRouter = require("./Router/courses.router");

app.use(cors());
app.use(express.json());

mongoose
  .connect(`${process.env.DB_URL}`)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((error) => {
    console.log("No connection");
  });

app.use("/courses", coursesRouter);

app.get("/", (req, res) => {
  res.send("Learn Hive!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
