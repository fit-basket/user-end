const express = require("express");
const router = express.Router();
const {
  getProduct,
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../../controllers/admin/product");

router.get("/single-product/:productId", getProduct);
router.get("/all-products/:businessId", getAllProducts);
router.post("/create-product", createProduct);
router.patch("/:productId", updateProduct);
router.delete("/:productId", deleteProduct);

module.exports = router;
