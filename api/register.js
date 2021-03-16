var express = require("express");
const User = require("../model/User");
var bcryptjs = require("bcryptjs");
var jwt = require("jsonwebtoken");
const config = require("config");

const {
  check,
  validationRequest,
  validationResult,
} = require("express-validator");
const { findOne } = require("../model/User");
const router = express.Router();

router.post(
  "/",
  [
    check("name", "name should not be empty").not().isEmpty(),
    check("password", "enter atleast 6 chars").isLength({ min: 6 }),
    check("email", "email type").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        user = new User({
          name,
          password,
          email,
        });
        const salt = await bcryptjs.genSalt(10);

        user.password = await bcryptjs.hash(password, salt);

        await user.save();

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
      } else {
        res.send("exists");
      }
    } catch {
      res.send(500);
    }
  }
);
module.exports = router;
