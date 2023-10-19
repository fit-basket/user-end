const express = require("express");
const cors = require("cors");
const people = require("./routes/auth");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use("/api/people", people);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
