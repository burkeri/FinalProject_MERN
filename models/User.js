// dependencies
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
      type: Date,
      required: true
    },
    premium: {
        type: Boolean,
        default: false,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

// hash
// UserSchema.methods.generateHash = (password) => {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
// }

// create model
const User = mongoose.model("User", userSchema);

module.exports = User;