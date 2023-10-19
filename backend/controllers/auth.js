const getData = (req, res) => {
  res.send({ message: "Hello Home!" });
};

const getID = (req, res) => {
  const { id } = req.params;
  res.send({ message: id });
};

module.exports = { getData, getID };
