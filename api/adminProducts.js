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

  product.description = req.body.description;

  Products.updateOne(
    { title: product.title },
    {
      title: product.title,

      price: product.price,
    },
    { upsert: true },
    (err, upserted) => {
      console.log(upserted);
    }
  );
});

router.patch("/:id", (req, res) => {
  var product = new Products();
  product.title = req.body.title;
  product.price = req.body.price;
  product.quantity = req.body.quantity;

  product.description = req.body.description;

  Products.findByIdAndUpdate(
    req.params.id,
    {
      $inc: { quantity: product.quantity },
    },
    (err, updated) => {
      console.log(updated);
      console.log(err);
    }
  );
});

router.delete("/:id", async (req, res) => {
  try {
    await Products.findByIdAndDelete(req.params.id, (err, deleted) => {
      console.log(deleted);
    });
  } catch (err) {
    res.send("error");
  }
});

module.exports = router;
