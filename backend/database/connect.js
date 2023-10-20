const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/purple-mango";

let dbConnection;

const connectToDb = (cb) => {
  MongoClient.connect(uri)
    .then((client) => {
      dbConnection = client.db();
      return cb();
    })
    .catch((err) => {
      console.log(err);
      return cb(err);
    });
};
const getDatabase = () => dbConnection;

module.exports = { connectToDb, getDatabase };
