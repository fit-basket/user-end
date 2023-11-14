const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
} = require("../../controllers/admin/product");

router.get("/product", getProducts);
router.post("/create-product", createProduct);

module.exports = router;
