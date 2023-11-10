const express = require("express");
const cors = require("cors");
require("dotenv").config();

const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");
const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// let db;
const uri = process.env.MONGO;

mongoose.connect(uri);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use("/api", shopRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.json({
    success: false,
    message,
    statusCode,
  });
});
