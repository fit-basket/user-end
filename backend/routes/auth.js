const express = require("express");
const router = express.Router();
const { getData, createShop } = require("../controllers/auth");

router.get("/shops", getData);

router.post("/createShop", createShop);

module.exports = router;
