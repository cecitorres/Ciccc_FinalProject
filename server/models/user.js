const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true
});

const User = mongoose.model("UserSchema", UserSchema);
module.exports = User;