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
app.use("/auth", require("./api/auth"));
app.use("/adminProducts", require("./api/adminProducts"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("mern/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "mern", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
