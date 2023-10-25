const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://souvikdeb:vlls7mKtjw8Fs4Be@cluster0.ylcnuqm.mongodb.net/thePurpleMango?retryWrites=true&w=majority";

let dbConnection;

const connectToDb = (cb) => {
  mongoose.connect(uri);
  // .then((client) => {
  //   dbConnection = client.db();
  //   return cb();
  // })
  // .catch((err) => {
  //   console.log(err);
  //   return cb(err);
  // });
  // MongoClient.connect(uri)
  //   .then((client) => {
  //     dbConnection = client.db();
  //     return cb();
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     return cb(err);
  //   });
};

const getDatabase = () => dbConnection;

module.exports = { connectToDb, getDatabase };
