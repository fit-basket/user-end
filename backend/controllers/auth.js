const getData = (req, res) => {
  let shops = [];
  db.collection("shops")
    .find()
    .forEach((shop) => shops.push(shop))
    .then(() => {
      res.status(200).json(shops);
    })
    .catch(() => {
      res.status(500).json({ error: "Error" });
    });
};

const getID = (req, res) => {
  const { id } = req.params;
  res.send({ message: id });
};

module.exports = { getData, getID };
