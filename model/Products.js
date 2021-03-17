var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});
module.exports = Products = mongoose.model("products", ProductSchema);
