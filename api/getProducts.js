const express = require("express");
const router = express.Router();
const Products = require("../model/Products");

router.get("/", (req, res) => {
  Products.find({}, (err, saved) => {
    res.send(saved);
  });
});
module.exports = router;
