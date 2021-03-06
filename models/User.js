// dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// user schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  picture: String,
  dob: {
    type: String,
    required: true
  },
  premium: {
    type: Boolean,
    default: false,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// User.plugin(passportLocalMongoose);

// create model
const User = mongoose.model("User", userSchema);

module.exports = User;
