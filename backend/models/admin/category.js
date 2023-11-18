const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  businessId: {
    type: String,
    required: true,
  },
  subCategory: [
    {
      type: String,
      required: true,
    },
  ],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
