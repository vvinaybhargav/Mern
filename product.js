var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//hello
var product = new Schema({
  title: String,
  price: Number,
});

module.exports = mongoose.model("products1", product);
