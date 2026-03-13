const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());

const chatRoutes = require("./routes/chatRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/chat",chatRoutes);

mongoose.connect("mongodb://localhost:27017/chatapp").then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});