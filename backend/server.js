const express = require("express");
const cors = require("cors");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");
const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// let db;
const uri =
  "mongodb+srv://souvikdeb:vlls7mKtjw8Fs4Be@cluster0.ylcnuqm.mongodb.net/thePurpleMango?retryWrites=true&w=majority";

mongoose.connect(uri);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use("/api", shopRoutes);
app.use("/api/auth", authRoutes);
