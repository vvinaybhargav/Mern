var express = require("express");
var router = express.Router();
const Products = require("../model/Products");

router.delete("/:id", async (req, res) => {
  try {
    const deletebyId = await Products.findById(req.params.id);
    deletebyId.title = req.body.title;
    const a1 = await deletebyId.remove();
    res.json(a1);
  } catch (err) {
    res.send("error");
  }
});

module.exports = router;
