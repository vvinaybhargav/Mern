var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  price: { type: Number, required: true },
});
module.exports = Products = mongoose.model("products", ProductSchema);
