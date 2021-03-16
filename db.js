var mongoose = require("mongoose");
var congig = require("config");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost/shop", {
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
