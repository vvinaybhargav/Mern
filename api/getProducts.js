const express = require("express");
const router = express.Router();
const Products = require("../model/Products");

router.get("/", (req, res) => {
  Products.find({}, (err, saved) => {
    res.send(saved);
  });
});
router.get("/:id", (req, res) => {
  Products.findById(req.params.id, (err, saved) => {
    res.send(saved);
  });
});
module.exports = router;
