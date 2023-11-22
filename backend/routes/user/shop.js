const express = require("express");
const router = express.Router();
const { getData } = require("../../controllers/user/shop");

router.get("/shops", getData);

// router.post("/createShop", createShop);

module.exports = router;
