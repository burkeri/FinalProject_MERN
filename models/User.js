// dependencies
const mongoose = require('mongoose');
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
    picture: {
      type: String,
      default: "https://via.placeholder.com/100"
    },
    dob: {
      type: Date,
      required: true
    },
    premium: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

// create model
const User = mongoose.model("User", userSchema);

module.exports = User;