var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send(202);
});
module.exports = router;
