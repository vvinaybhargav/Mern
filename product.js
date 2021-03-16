var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var product = new Schema({
  title: String,
  price: Number,
});

module.exports = mongoose.model("products", product);
