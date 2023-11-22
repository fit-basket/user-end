const express = require("express");
const cors = require("cors");
require("dotenv").config();

const shopRoutes = require("./routes/user/shop");
const productRoutes = require("./routes/admin/product");
const userAuthRoutes = require("./routes/user/auth");
const adminAuthRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/admin/category");
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

app.use("/api/products", productRoutes);
app.use("/api/user", shopRoutes);
app.use("/api", categoryRoutes);
app.use("/api/auth/user", userAuthRoutes);
app.use("/api/auth/admin", adminAuthRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.json({
    success: false,
    message,
    statusCode,
  });
});
