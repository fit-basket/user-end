const productModal = require("../../models/admin/product");
const categoryModal = require("../../models/admin/category");

const getProducts = async (req, res) => {
  const { businessId, categoryId } = req.query;

  try {
    const response = await productModal.find({
      businessId,
      category: categoryId,
    });

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

module.exports = { getProducts, createProduct };
