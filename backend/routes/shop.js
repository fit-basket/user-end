const express = require("express");
const router = express.Router();
const { getData, createShop } = require("../controllers/shop");

router.get("/shops", getData);

router.post("/createShop", createShop);

module.exports = router;
