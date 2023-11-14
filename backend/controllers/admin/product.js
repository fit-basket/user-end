const productModal = require("../../models/admin/product");

const getProducts = async (req, res) => {
  const result = await productModal
    .find({})
    .then((response) => {
      res.status(200).json({ success: true, data: response });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

const createProduct = async (req, res) => {
  console.log("first", req);
  const product = req.body;
  const result = await productModal.create(product);

  res.status(200).json({
    success: true,
    data: result,
    message: "Product added successfully",
  });
};

module.exports = { getProducts, createProduct };
