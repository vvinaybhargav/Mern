const express = require("express");
const AddProduct = require("../model/Products");

const router = express.Router();

router.post("/", (req, res) => {
  var product = new AddProduct();
  product.title = req.body.title;
  product.price = req.body.price;
  product.quantity = req.body.quantity;
  product.description = req.body.description;

  product.save((err, saved) => {
    res.send(saved);
  });
});
module.exports = router;
