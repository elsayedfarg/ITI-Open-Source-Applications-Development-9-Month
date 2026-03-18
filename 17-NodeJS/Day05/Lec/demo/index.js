// packages
const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
// const { sanitizeMongoInput } = require("express-5-mongo-sanitize"); // not stable
const { xss } = require("express-xss-sanitizer");
const limiter = require("./middlewares/rateLimiter");

var hpp = require("hpp");

dotenv.config({ path: "config.env" });

//
const dbConnection = require("./config/database");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const donationRouter = require("./routes/donationRoutes");
const errorHandler = require("./middlewares/errorhandler");

dbConnection();

const app = express();

// middlewares
app.use(express.json());
app.use(helmet());
// app.use(sanitizeMongoInput);
app.use(xss());
app.use(hpp());

app.use(limiter);

app.use(cors());

// mount routes
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/donation", donationRouter);

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
