const express = require("express");
const router = express.Router();
const { getData, getID } = require("../controllers/auth");

router.get("/shops", getData);

router.get("/:id", getID);

module.exports = router;
