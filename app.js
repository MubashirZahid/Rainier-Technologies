const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

const CourseRouter = require("./routes/CourseRouter");
const AuthRouter = require("./routes/AuthRouter");

const databaseConnection = require("./config/database");
dotenv.config();


app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", AuthRouter);
app.use("/course", CourseRouter);

app.use((req, res) => {
  return res.status(400).send({ message: "Invalid Request" });
});

databaseConnection(() => {
  app.listen(8000, () => {
    console.log("Server is running on port 8000");
  });
});