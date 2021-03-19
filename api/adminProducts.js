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

router.post("/", (req, res) => {
  var product = new Products();
  product.title = req.body.title;
  product.price = req.body.price;
  product.quantity = req.body.quantity;
  product.description = req.body.description;

  Products.updateOne(
    { title: product.title },
    {
      title: product.title,
      quantity: product.quantity,
      price: product.price,
      description: product.description,
    },
    { upsert: true },
    (err, upserted) => {
      console.log(upserted);
    }
  );
});

router.patch("/:id", async (req, res) => {
  try {
    const deletebyId = await Products.findById(req.params.id);
    deletebyId.quantity = req.body.quantity;
    const a1 = await deletebyId.save();
    res.json(a1);
  } catch (err) {
    res.send(err);
  }
});

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
