const shopModel = require("../../models/user/shops");

const getData = async (req, res) => {
  const result = await shopModel
    .find({})
    .then((response) => {
      res.status(200).json({ success: true, data: response });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

const createShop = async (req, res) => {
  const shop = req.body;
  const result = await shopModel.create(shop);

  res.status(200).json({ status: "ok" });
};

module.exports = { getData, createShop };
