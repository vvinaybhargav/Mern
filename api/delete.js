var express = require("express");
var router = express.Router();

router.delete("/", (req, res) => {
  res.send("deleted");
});
module.exports = router;
