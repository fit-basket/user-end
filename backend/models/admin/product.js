const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    subCategories: [
      {
        type: String,
      },
    ],
    business_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
