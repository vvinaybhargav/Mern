var mongoose = require("mongoose");
var config = require("config");
const db = config.get("mongoURI");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb://mongodb:mongodb@cluster0-shard-00-00.6cviq.mongodb.net:27017,cluster0-shard-00-01.6cviq.mongodb.net:27017,cluster0-shard-00-02.6cviq.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-bc7d8c-shard-0&authSource=admin&retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log("Mongo DB Connected......");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
module.exports = connectDb;
