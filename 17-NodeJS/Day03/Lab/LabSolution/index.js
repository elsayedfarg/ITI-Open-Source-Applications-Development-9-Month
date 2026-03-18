// layers order
// 1-models
// 2-services
// 3-controllers
// 4-routes
// 5-validation

// packages
const express = require("express");
const dotenv = require("dotenv");
var cors = require("cors");

dotenv.config({ path: "config.env" });

//
const dbConnection = require("./config/database");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const errorHandler = require("./middlewares/errorhandler");

dbConnection();

const app = express();

// middlewares
app.use(express.json());

app.use(cors());

// mount routes
app.use("/users", userRouter);
app.use("/posts", postRouter);

// global error middleware (any error in the app will end here)
// app.use((err, req, res, next) => {
//   return res.status(400).json({ message: err.message });
// });
app.use(errorHandler);

// server running
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
