var mongoose = require("mongoose");
var config = require("config");
const db = config.get("mongoURI");
//Heyy
//ncoonc
//mcm
const connectDb = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Mongo DB Connected......");
  } catch {
    console.log("Not Connected");
    process.exit(1);
  }
};
module.exports = connectDb;
