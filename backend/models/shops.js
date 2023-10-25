const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    owner: { type: String, required: true },
    sections: { type: Array, required: true },
    rating: { type: Number, required: true },
    menu: { type: Array, required: true },
    image: { type: String },
  },
  { collection: "shops" }
);

const shopModel = mongoose.model("shopModel", shopSchema);

module.exports = shopModel;
