const express = require("express");
const cors = require("cors");
const people = require("./routes/auth");
const app = express();
const mongoose = require("mongoose");

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/api", people);

// let db;
const uri =
  "mongodb+srv://souvikdeb:vlls7mKtjw8Fs4Be@cluster0.ylcnuqm.mongodb.net/thePurpleMango?retryWrites=true&w=majority";

mongoose.connect(uri);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
