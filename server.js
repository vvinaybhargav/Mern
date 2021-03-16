var express = require("express");
var Product = require("./product");
const router = express.Router();
const User = require("./model/User");
const cors = require("cors");

var app = express();
var connectDb = require("./db");
app.use(cors());

app.use(express.json({ extended: false }));

connectDb();

app.use("/register", require("./api/register"));
app.use("/admin", require("./api/admin"));
app.use("/auth", require("./api/auth"));
app.use("/delete", require("./api/delete"));

router.delete("/d", (req, res) => {
  res.send("deleted");
});

app.get("/get", cors(), (req, res) => {
  User.find({}, (err, user) => {
    res.send(user);
  });
});

app.post("/post", (req, res) => {
  var i = new Product();
  i.title = req.body.title;
  i.price = req.body.price;

  i.save((err, saved) => {
    res.send(saved);
  });
});
// app.delete("/delete/:id", cors(), (req, res) => {
//   var i = new Product();
//   i.title = req.body.title;
//   Product.remove({ title: i.title }, (err, deleted) => {
//     res.send(deleted);
//     console.log("deleted");
//   });
// });
app.listen(3004, () => console.log("Port 3004"));
