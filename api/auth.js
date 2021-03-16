var express = require("express");
var router = express.Router();
var bcryptjs = require("bcryptjs");
const User = require("../model/User");
var jwt = require("jsonwebtoken");
const config = require("config");

const { check, validationResult } = require("express-validator");
const { findOne } = require("../model/User");

router.post(
  "/",
  [
    check("password", "Password is required").exists(),
    check("email", "email type").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      const isMatch = await bcryptjs.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      } else {
        res.send("Success");
      }

      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch {
      res.send(500);
    }
  }
);
module.exports = router;
