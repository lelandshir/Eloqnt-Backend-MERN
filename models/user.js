const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true, minLength: 5 },
  password: { type: String, required: true, minLength: 8 },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
