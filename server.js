var express = require("express");
var Product = require("./product");
const router = express.Router();
const User = require("./model/User");
const cors = require("cors");
const path = require("path");

var app = express();
const connectDb = require("./config/db");
app.use(cors());

app.use(express.json({ extended: false }));

connectDb();

app.use("/register", require("./api/register"));
app.use("/admin", require("./api/admin"));
app.use("/auth", require("./api/auth"));
app.use("/delete", require("./api/delete"));
app.use("/addProducts", require("./api/addProducts"));
app.use('/getProducts',require('./api/getProducts'))

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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("mern/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "mern", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
