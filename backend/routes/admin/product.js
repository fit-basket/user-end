const express = require("express");
const router = express.Router();
const {
  getProduct,
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductsSortedByCategory,
} = require("../../controllers/admin/product");

router.get("/single/:productId", getProduct);
router.get("/all/:businessId", getAllProducts);
router.get("/category/:businessId", getProductsSortedByCategory);
router.post("/create-product", createProduct);
router.patch("/:productId", updateProduct);
router.delete("/:productId", deleteProduct);

module.exports = router;
