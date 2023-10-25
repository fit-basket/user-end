const mongoose = require("mongoose");

const shopMenu = new mongoose.Schema({
  item: { type: String, required: true },
  price: { type: Number, required: true },
});

const shopSchema = new mongoose.Schema({
  title: { type: String, required: true },
  owner: { type: String, required: true },
  sections: { type: Array, required: true },
  rating: { type: Number, required: true },
  menu: shopMenu,
});

const shopModel = mongoose.model("shopModel", shopSchema);

module.exports = shopModel;

// {
//     "title": "Sugar & Brownies",
//     "owner": "Neelakshi",
//     "sections": ["Bakery"],
//     "rating": 5,
//     "menu": [
//       {
//         "item": "Bento Cakes",
//         "price": 350
//       },
//       {
//         "item": "Brownies",
//         "price": "200"
//       }
//     ]
//   }
