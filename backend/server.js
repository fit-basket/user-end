const express = require("express");
const cors = require("cors");
const people = require("./routes/auth");
const app = express();
const { connectToDb, getDatabase } = require("./database/connect");
const { ObjectId } = require("mongodb");

const port = process.env.PORT || 3001;

app.use(cors());

// app.use("/api/people", people);

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
    db = getDatabase();
  }
});

app.get("/", (req, res) => {
  let shops = [];
  db.collection("shops")
    .find()
    .forEach((shop) => shops.push(shop))
    .then(() => {
      res.status(200).json(shops);
    })
    .catch(() => {
      res.status(500).json({ error: "Error" });
    });
});

app.get("/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("shops")
      .findOne({ _id: new ObjectId(req.params.id) })
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch(() => {
        res.status(500).json({ error: "Could not find item" });
      });
  } else {
    res.status(500).json({ error: "Wrong id" });
  }
});
