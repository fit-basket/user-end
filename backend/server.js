const express = require("express");
const cors = require("cors");
const shop = require("./routes/shop");
const app = express();
const mongoose = require("mongoose");

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/api", shop);

// let db;
const uri =
  "mongodb+srv://souvikdeb:vlls7mKtjw8Fs4Be@cluster0.ylcnuqm.mongodb.net/thePurpleMango?retryWrites=true&w=majority";

mongoose.connect(uri);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
