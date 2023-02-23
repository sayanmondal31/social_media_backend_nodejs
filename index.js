const express = require("express");
require("dotenv").config();
const connectWithMongodb = require("./db/db");
const cors = require("cors");

connectWithMongodb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/posts", require("./routers/post"));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
