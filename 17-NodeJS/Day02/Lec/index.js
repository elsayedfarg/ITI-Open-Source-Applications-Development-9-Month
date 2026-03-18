const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Reads the raw request body
// Parses JSON
// Converts it into a JS object
// Attaches it to req.body
app.use(express.json());

// schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: String,
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: ["admin", "user"],
      default: "user",
    },
    age: { type: Number, required: true, min: 18, max: 100 },
  },
  { timestamps: true },
);

// model
const User = mongoose.model("User", userSchema);

// routes
app.post("/users", async (req, res) => {
  const { name, email, password, age } = req.body;
  if (!name || !email || !password || !age) {
    return res.status(400).json({ message: "all fields are required" });
  }
  const user = await User.create({ name, email, password, age });
  res.status(201).json({ message: "user created successfully", data: user });
});

app.get("/users", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // default page = 1
    const limit = parseInt(req.query.limit) || 10; // default limit = 10
    const skip = (page - 1) * limit;

    const users = await User.find().skip(skip).limit(limit);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find user by ID
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User fetched", data: user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.listen(3000, () => {
  mongoose
    .connect("mongodb://localhost:27017/nodejsLec2")
    .then(() => {
      console.log("Connected");
    })
    .catch((e) => {
      console.log(e);
    });
  console.log(`Server running on http://localhost:${PORT}`);
});
