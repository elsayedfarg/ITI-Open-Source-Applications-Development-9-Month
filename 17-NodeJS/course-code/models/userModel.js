const mongoose = require("mongoose");

// schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      required: true,
      enum: ["user", "admin"],
      default: "user",
    },
    age: {
      type: Number,
      required: true,
      min: [10, "Age must be greater than 10"],
      max: [100, "Age must be less than 100"],
    },
  },
  { timestamps: true },
);

// model
const User = mongoose.model("User", userSchema);

// create index for unique email
userSchema.index({ email: 1 }, { unique: true });

module.exports = User;
