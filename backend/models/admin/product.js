const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subCategories: {
      type: String,
    },
    businessId: {
      type: String,
      required: true,
    },
    businessType: {
      type: String,
      required: true,
    },
  }
  // { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
