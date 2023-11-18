const express = require("express");
const router = express.Router();
const {
  addCategory,
  getCategory,
} = require("../../controllers/admin/category");

router.get("/category", getCategory);
router.post("/add-category", addCategory);

module.exports = router;
