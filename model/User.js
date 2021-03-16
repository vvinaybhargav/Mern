var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  data: {
    type: Date,
    default: Date.now,
  },
});
module.exports = User = mongoose.model("users", UserSchema);
