const productModal = require("../../models/admin/product");
const categoryModal = require("../../models/admin/category");

const getProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await productModal.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllProducts = async (req, res) => {
  const { businessId } = req.params;
  const { categoryId } = req.query;

  try {
    let query = { businessId };

    if (categoryId) {
      query.category = categoryId;
    }

    const response = await productModal.find(query);

    res.status(200).json({ success: true, data: response });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createProduct = async (req, res) => {
  const product = req.body;
  const { category, image } = product;
  const result = await productModal.create(product);

  // update category image with the most recently uploaded image for that category
  await categoryModal.findByIdAndUpdate(category, {
    $set: { image },
  });

  res.status(200).json({
    success: true,
    data: result,
    message: "Product added successfully",
  });
};

const updateProduct = async (req, res) => {
  const { productId } = req.params; // Assuming productId is passed in the URL params
  const updatedFields = req.body; // Updated fields sent in the request body

  try {
    const existingProduct = await productModal.findByIdAndUpdate(
      productId,
      { $set: updatedFields }, // Use $set to update specific fields
      { new: true }
    );

    if (!existingProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({
      success: true,
      data: existingProduct,
      message: "Product updated successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  const { productId } = req.params; // Get productId from URL parameters

  try {
    // Find and delete the product by its ID
    const deletedProduct = await productModal.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Additional logic (if needed) - e.g., removing references from other entities

    res.status(200).json({
      success: true,
      data: deletedProduct,
      message: "Product deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getProduct,
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
