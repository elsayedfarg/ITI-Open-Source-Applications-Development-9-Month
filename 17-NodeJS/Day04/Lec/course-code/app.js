const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());
app.use(cors());

// Route Mount
app.use("/users", userRouter);
app.use("/posts", postRouter);

// Global error handler
app.use(errorHandler);

module.exports = app;
