const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

require("dotenv-safe").config();

const db = require("./database/mongoDBconfig");
db.connect();

const userRouter = require("./routes/userRoutes");

app.use("/users", userRouter);

module.exports = app;