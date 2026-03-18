const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { sanitizeMongoInput } = require("express-v5-mongo-sanitize");
const { xss } = require("express-xss-sanitizer");
const hpp = require("hpp");
const rateLimiter = require("./middlewares/rateLimiter");

const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const donationRouter = require("./routes/donationRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.set("trust proxy", 1);

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(sanitizeMongoInput);
app.use(xss());
app.use(hpp());
app.use(rateLimiter);

// Route Mount
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/donation", donationRouter);

// Global error handler
app.use(errorHandler);

module.exports = app;
